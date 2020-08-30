import React from 'react';
import image from './image3.PNG'
function ProfilPhoto(){
    return(
 <div className="photo">
<img src={image} alt="" width={400} height={700}/>
     </div>
    );
}
export {ProfilPhoto} 