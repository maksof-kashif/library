using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Text;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using booksCrudApi.Models;

namespace booksCrudApi.Controllers
{
    public class booksController : ApiController
    {
        private booksd_bEntities db = new booksd_bEntities();

        // GET: api/books
        public IEnumerable<book> Getbooks()
        {
            var count = db.books.Count();
            if (count != 0)
            {
                var filteredData = db.books.Where(b => b.isDeleted != 1);
                return filteredData;
            }
            else
            {
                var response = new HttpResponseMessage(HttpStatusCode.NoContent)
                {
                    Content = new StringContent(string.Format("No Records Found")),
                    ReasonPhrase = "No Records Found"
                };
                throw new HttpResponseException(response);
            }
            //return db.books;
        }

        // GET: api/books/id
        [ResponseType(typeof(book))]
        public IHttpActionResult Getbook(string id)
        {
            book book = db.books.Find(id);
            
            if (book == null || book.isDeleted == 1)
            {
                return NotFound();
            }
            return Ok(book);
        }

        // PUT: api/books/id
        [ResponseType(typeof(void))]
        public IHttpActionResult Putbook(string id, book book)
        {
            //if (id != book.id)
            //{
            //    return BadRequest("Invalid Request");
            //}
            using (booksd_bEntities entities = new booksd_bEntities()) {
                var entity = entities.books.FirstOrDefault(e => e.id == id);

                if(entity == null)
                {
                    return BadRequest("Invalid Request");
                }else
                {
                    if (book.name != null)
                    {
                        entity.name = book.name;
                    }
                    if (book.authors != null)
                    {
                        entity.authors = book.authors;
                    }
                    if (book.dateOfPublication != null)
                    {
                        entity.dateOfPublication = DateTimeOffset.Parse(book.dateOfPublication).UtcDateTime.ToString();
                    }
                    if (book.numberOfPages != 0)
                    {
                        entity.numberOfPages = book.numberOfPages;
                    }
                    entity.updateDate = DateTime.UtcNow.ToString();
                    try
                    {

                        entities.SaveChanges();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!bookExists(id))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }
                    
                }
                
            }
            return Ok("Successfully Updated");
        }

        // POST: api/books
        [ResponseType(typeof(book))]
        public IHttpActionResult Postbook(book book)
        {
            Guid guidobj = Guid.NewGuid();
            if (book.name == null || book.numberOfPages == 0 || book.dateOfPublication == null || book.authors == null)
            {
                return BadRequest("Invalid Request!");
            }
            book.id = guidobj.ToString();
            book.createDate = DateTime.UtcNow.ToString();
            book.dateOfPublication = DateTimeOffset.Parse(book.dateOfPublication).UtcDateTime.ToString();
            db.books.Add(book);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (bookExists(book.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return CreatedAtRoute("DefaultApi", new { id = book.id }, "Book Created Successfully");
        }

        // DELETE: api/books/id
        [ResponseType(typeof(book))]
        public IHttpActionResult Deletebook(string id)
        {
            book book = db.books.Find(id);
            if (book == null)
            {
                return NotFound();
            }

            book.isDeleted = 1;
            db.SaveChanges();

            return Ok("Book Successfully Deleted.");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool bookExists(string id)
        {
            return db.books.Count(e => e.id == id) > 0;
        }
    }
}