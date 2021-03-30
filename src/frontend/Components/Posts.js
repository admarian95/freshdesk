import './Posts.css'
const Posts = () => {
    return (
        <div style= {{ display: 'flex'}}>
        <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
         <div class="card" style={{width: '18rem'}}>
         <img class="card-img-top" src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
             <div class="card-body">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
     </div>
      <div class="card" style={{width: '18rem'}}>
      <img class="card-img-top" src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
          <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
  </div>
   <div class="card" style={{width: '18rem'}}>
   <img class="card-img-top" src="https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
       <div class="card-body">
           <h5 class="card-title">Card title</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
</div>
</div>
    )
}

export default Posts