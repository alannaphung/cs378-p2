import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, desc, price, imgname, subtotal, modTotal, cart, updateCart}) => {
    const [count, setCount] = useState(0);
    return (
        <div class="row p-3">
            <div class="col-4"><img src={'images/' + imgname} alt={imgname} class="img-fluid"></img></div>
            <div class="col-8">
                <div style={{marginRight: '15px', display: 'flex', flexDirection: 'column'}}>
                    <span class="itemtitle">{title}</span>
                    <span class="itemdesc">{desc}</span>
                    <div class="row">
                        <div class="col-8"><span class="itemprice">{'$' + price}</span></div>
                        <div class="col-1"><button type="button" class="button" onClick={() => {
                            if (count > 0) { setCount(count - 1); updateCart(prev => ({...prev, [title]: count - 1}));
                            if (count === 1) { // offset bc count isn't fully updated yet
                                const cartCopy = {...cart};
                                delete cartCopy[title];
                                updateCart(cartCopy);
                            }
                            modTotal(subtotal - price) }}}> - </button></div>
                        <div class="col-1 text-center"><p>{count}</p></div>
                        <div class="col-1"><button type="button" class="button" onClick={() => {
                             setCount(count + 1); updateCart(cart => ({...cart, [title]: count + 1})); modTotal(subtotal + price) }}>+</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
