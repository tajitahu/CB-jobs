import React from 'react';
import styled from 'styled-components';
import { FaUniversity, FaBook, FaEye, FaDownload } from 'react-icons/fa';

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const DocumentItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`;

const ItemButton = styled.button`
  flex: 1 0 200px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: lightblue;
  outline: none;
  cursor: pointer;
`;

const DocumentCard = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  max-width: 230px;
  &:hover {
    background: #e2effd; // Change this to the color you want on hover
  }
  
`;
 const DocumentImageContainer = styled.div`
 background: #f9f9f9;
    padding: 10px;`;
const DocumentImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

const DocumentTitle = styled.h2`
  font-size: 12px;
  text-align: left;
  margin-bottom: 10px;
  line-height: 1.2;
`;
const BookTitle = styled.h2`
  font-size: 12px;
  text-align: left;
  margin-bottom: 10px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width:150px;
`;

const DocumentViews = styled.p`
  font-size: 12px;
  color: gray;
`;

const DocumentTitleText = ({ children }) => {
    const truncatedTitle = children.length > 20 ? `${children.substring(0, 40)}...` : children;
    return <h2 style={{ fontSize: '12px', textAlign: 'left', marginBottom: '10px', lineHeight: '1.2' }}>{truncatedTitle}</h2>;
  };

const TabContent = ({ tab }) => {
  if (tab === 'universities') {

    const universities = [
        'Harvard University',
        'Stanford University',
        'Massachusetts Institute of Technology (MIT)',
        'California Institute of Technology (Caltech)',
        'University of Oxford',
        'University of Cambridge',
        'University of Chicago',
        'Princeton University',
        'Yale University',
        'Columbia University',
    ];
return (
    <ItemList>
        {universities.map((university, index) => (
            <ItemButton key={index}>
                {university} <FaUniversity />
            </ItemButton>
        ))}
    </ItemList>
);
      
  }

  if (tab === 'documents') {
    const documents = [
      { title: 'EES 150 - Review for Exam ', views: 200,image:'../../public/images/doc1.webp' },
      { title: 'Lesson 16 How and Why Volcanoes Vary', views: 456,image:'../../public/images/doc2.webp' },
      { title: 'Chapter 1 Part 1 Lecture Notes', views:700,image:'../../public/images/doc3.webp' },
      { title: 'Reflective - Grade: A', views:300,image:'../../public/images/doc4.webp' },
      { title: 'BIO 140 - Cellular Respiration Case Study', views:400,image:'../../public/images/doc5.webp' },
      { title: 'Chapter 12 Lecture Notes', views:400,image:'../../public/images/doc4.webp' },
      { title: 'Mathematical investigation of an egg - Grade: A', views:500,image:'../../public/images/doc1.webp' },
    ];
    return (
        <DocumentItemList>
        {documents.map((document, index) => (
          <DocumentCard key={index}>
            <DocumentImageContainer>
                <DocumentImage src={document.image} alt={document.title} />
            </DocumentImageContainer>
           
            <div>
              <DocumentTitle><DocumentTitleText>{document.title}</DocumentTitleText></DocumentTitle>
              <DocumentViews>
                <FaEye /> {document.views}
              </DocumentViews>
            </div>
          </DocumentCard>
        ))}
      </DocumentItemList>
    );
  }

  if (tab === 'books') {
    const books = [
      { title: 'Campbell Biology', downloads: 123,author:'Jane B. Reece; Lisa A. Urry;' },
      { title: 'Give Me Liberty!: an American History', downloads: 456,author:'Eric Foner'},
        { title: 'The Norton Anthology of English Literature', downloads: 789,author:'Stephen Greenblatt'},
        { title: 'The Elements of Style', downloads: 100,author:'William Strunk Jr.; E.B. White'},
        { title: 'The Catcher in the Rye', downloads: 200,author:'J.D. Salinger'},
        { title: 'The Great Gatsby', downloads: 300,author:'F. Scott Fitzgerald'},
        { title: 'The Odyssey', downloads: 400,author:'Homer'},
    ];
    return (
        <DocumentItemList>
        {books.map((book, index) => (
          <DocumentCard key={index}>
            <FaBook size={50} style={{ marginRight: '10px' }} />
            <div>
              <BookTitle>{book.title}</BookTitle>
              <DocumentViews>
                <FaDownload /> {book.downloads}
              </DocumentViews>
            </div>
          </DocumentCard>
        ))}
     </DocumentItemList>
    );
  }

  return null;
};

export default TabContent;