import React, { useState } from 'react';
import { List, ListItem, ListItemText, Box, Typography, Button, Modal } from '@mui/material';
import './ImageDrawer.css';

const images = [
  {
    title: 'Membership Model',
    src: [require('../../assets/images/membershipModel.png')],
  },
  {
    title: 'Post Card',
    src: [
      require('../../assets/images/postCard_Page_1.png'),
      require('../../assets/images/postCard_Page_2.png'),
    ],
  },
  {
    title: 'Values',
    src: [require('../../assets/images/values.png')],
  },
  {
    title: 'Membership Bi-Fold',
    src: [
      require('../../assets/images/membershipBiFold-02.jpg'),
      require('../../assets/images/membershipBiFold-01.jpg'),
    ],
  },
];

const ImageDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpenDrawer = (image) => {
    setSelectedImage(image);
    setCurrentPage(0);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedImage(null);
  };

  const handleNextPage = () => {
    if (selectedImage && currentPage < selectedImage.src.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (selectedImage && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="image-drawer-container">
      <List className="image-list">
        {images.map((image, index) => (
          <ListItem button key={index} onClick={() => handleOpenDrawer(image)} className="image-list-item">
            <ListItemText primary={image.title} />
          </ListItem>
        ))}
      </List>
      <Modal open={drawerOpen} onClose={handleCloseDrawer}>
        <Box className="modal-box">
          {selectedImage && (
            <>
              <Typography variant="h6" gutterBottom className="modal-title">
                {selectedImage.title}
              </Typography>
              <img src={selectedImage.src[currentPage]} alt={selectedImage.title} className="modal-image" />
              <div className="modal-controls">
                <Button onClick={handlePrevPage} disabled={currentPage === 0} className="nav-button">
                  Previous
                </Button>
                <Button onClick={handleNextPage} disabled={currentPage === selectedImage.src.length - 1} className="nav-button">
                  Next
                </Button>
              </div>
              <Button variant="contained" onClick={handleCloseDrawer} className="close-button">
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ImageDrawer;
