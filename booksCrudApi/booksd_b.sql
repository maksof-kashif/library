USE [booksd_b]
GO
/****** Object:  Table [dbo].[book]    Script Date: 09-07-2019 09:13:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[book](
	[id] [varchar](50) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[numberOfPages] [int] NOT NULL,
	[dateOfPublication] [varchar](50) NOT NULL,
	[createDate] [varchar](50) NULL,
	[updateDate] [varchar](50) NULL,
	[authors] [varchar](50) NOT NULL,
	[isDeleted] [int] NOT NULL CONSTRAINT [DF_book_isDeleted]  DEFAULT ((0)),
 CONSTRAINT [PK_book] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[book] ([id], [name], [numberOfPages], [dateOfPublication], [createDate], [updateDate], [authors], [isDeleted]) VALUES (N'123456-44679-12355', N'UPDATED NAME', 690, N'12-07-2019', N'12-07-2019', N'09-07-2019 15:49:46', N'anonymous', 0)
INSERT [dbo].[book] ([id], [name], [numberOfPages], [dateOfPublication], [createDate], [updateDate], [authors], [isDeleted]) VALUES (N'123456-44679-12359', N'Test3', 750, N'06-07-2019', N'06-07-2019', NULL, N'tester321', 0)
INSERT [dbo].[book] ([id], [name], [numberOfPages], [dateOfPublication], [createDate], [updateDate], [authors], [isDeleted]) VALUES (N'123456-44679-12384', N'Tester123', 700, N'08-07-2019', N'08-07-2019', NULL, N'tester123', 0)
INSERT [dbo].[book] ([id], [name], [numberOfPages], [dateOfPublication], [createDate], [updateDate], [authors], [isDeleted]) VALUES (N'22a68d76-d419-4880-83a7-818fbb490ec5', N'HUSSAIN', 790, N'08-07-2019 07:00:00', N'08-07-2019 17:32:14', NULL, N'testers357', 0)
INSERT [dbo].[book] ([id], [name], [numberOfPages], [dateOfPublication], [createDate], [updateDate], [authors], [isDeleted]) VALUES (N'aaf533b2-dbaa-4183-bf97-9c178bb3481f', N'CREATERS DEN', 800, N'06-07-2019 07:00:00', N'08-07-2019 17:42:32', NULL, N'anonymous', 0)
