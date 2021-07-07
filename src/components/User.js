import React, { useState } from "react";

export const User = ({ title, body, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.title.value, evt.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
                <div className="guncelle-bg"> 
                          <div  className="row">
                              <div className="column duzenle-div">
                                  <span className="duzenle-text">Düzenle</span>
                              </div>
                              <div className="column duzenle-span">
                                  <span  onSubmit={handleOnEditSubmit}>X</span>
                              </div>
                          </div>
                          <hr className="hr1"></hr>
                          <form  onSubmit={handleOnEditSubmit}>
                          <span className="duzenle-text">Title</span>
                            <input placeholder="Name" name="name" defaultValue={title} />
                            <span className="duzenle-text">Body</span>
                            <textarea className="height102" rows="1" cols="50" wrap="physical" name="body" defaultValue={body}></textarea>
                            <hr className="hr2"></hr>
                            <button className="guncelle-button" onSubmit={handleOnEditSubmit}>GÜNCELLE</button>
                          </form>
                </div>
        
      ) : (
        <div>
        <div className="user">
          <span className="user-name">{body}</span>
          <div>
          
          <button className="detay-button" onClick={handleEdit}><span className="button-text">DETAY</span></button>

            <button className="duzenle-button" onClick={handleEdit}><span className="button-text">DÜZENLE</span></button>
            <button className="sil-button" onClick={handleDelete}><span className="button-text">SİL</span></button>
          </div>
          
        </div>
        <hr className="hr3"></hr>
        </div>
        
      )}
    </div>
  );
};
