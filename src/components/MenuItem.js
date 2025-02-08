import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, desc, price, imgname }) => {
    return (
        <div class="row p-3">
            <div class="col-4"><img src={'images/' + imgname} alt={imgname} class="img-fluid"></img></div>
            <div class="col-8">
                <div style={{marginRight: '15px', display: 'flex', flexDirection: 'column'}}>
                    <span class="itemtitle">{title}</span>
                    <span class="itemdesc">{desc}</span>
                    <div class="row">
                        <div class="col"><span class="itemprice">{'$' + price}</span></div>
                        <div class="col justify-content-end" style={{ display: 'grid', justifyItems: 'end' }}>
                            <button type="button" class="button" style={{alignSelf: 'flex-end'}}>Add</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
