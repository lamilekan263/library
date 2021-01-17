import React from 'react'

const resourceLinks = [
  {
    id: "1",
    title: "PDF DRIVE",
    url:
      "https://www.pdfdrive.com/search?q=Medical%20&pagecount=&pubyear=&searchin=&em=&page=2",
  },
  {
    id: "2",
    title: "FREE BOOK CENTER",
    url:
      "http://www.freebookcentre.net/medical_text_books_journals/medical_text_books_online.html",
  },
  {
    id: "3",
    title: "BOOK TREE",
    url: "https://booktree.ng/category/free-medical-books/",
  },
  {
    id: "4",
    title: "FREE BOOK 4 DOCTORS",
    url: "http://www.freebooks4doctors.com/",
  },
  {
    id: "5",
    title: "MED BOOK SHELF",
    url: "http://medbookshelf.info/",
  },
];

const Resources = () => {
    return (
      <div className="p-5">
        <div className="md:grid grid-cols-3 gap-4  justify-center items-center text-center">
          {resourceLinks.map((resource) => {
            return (
              <a
                href={resource.url}
                key={resource.id}
                className="p-5 bg-gradient-to-r from-green-900 via-green-700 to-green-500  text-white mt-4 md:ml-3 h-64 rounded-lg flex items-center justify-center hover:bg-green-900 cursor-pointer "
              >
                {resource.title}
              </a>
            );
          })}
        </div>
      </div>
    );
}

export default Resources
