import React from 'react'

const Text = () => {
  return (
    <>
     <section className="single-blog">
        <div className="container bg-single">
            <div className="row">
                <div className="col-lg-12">
                    <div className="singleblog-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in tortor sed eros
                            consequat rutrum eget iaculis
                            lacus. Aenean ac sapien risus. Nullam eget lobortis odio. Nulla ac lacus in nunc sagittis
                            pretium ut ac nulla. In mollis
                            hendrerit metus, eu posuere dolor hendrerit vel. Duis sit amet tortor imperdiet nisl aliquam
                            scelerisque. Suspendisse
                            lobortis condimentum fermentum. In volutpat est libero, a facilisis ipsum pharetra eu. Fusce
                            condimentum metus id ante
                            auctor pellentesque. Donec placerat ornare risus ut sodales. In accumsan risus nec sodales
                            ultrices. Vestibulum auctor
                            auctor sodales. Donec varius volutpat tellus dapibus fringilla.</p>
                        <p>Duis id leo gravida, convallis lorem ac, tincidunt tortor. Fusce in mollis eros, ac tempor
                            purus. Nulla facilisi. Nam
                            dictum neque quis felis iaculis, ut condimentum ex feugiat. Sed tincidunt velit sem, non
                            elementum nibh dapibus eget.
                            Cras at sagittis tellus. Donec vitae ullamcorper mi. Donec in ornare lacus. Cras elementum
                            mi eget vestibulum pulvinar.
                            Sed accumsan vel lorem ut ultricies.</p>
                        <p><a href="#"><img src="images/big-banner.png" width="100%" /></a></p>
                        <p>Aliquam non sodales felis. Fusce luctus porta tincidunt. Etiam aliquet varius est vestibulum
                            consectetur. Donec arcu
                            justo, fringilla sit amet nisi eu, hendrerit facilisis justo. Donec nisl risus, tincidunt at
                            augue eget, ultrices varius
                            orci. Fusce hendrerit lacus in volutpat malesuada. Vestibulum mattis tellus at purus pretium
                            ullamcorper. In hac
                            habitasse platea dictumst.</p>
                        <p>Integer consectetur condimentum dolor eu consequat. Suspendisse dictum, tellus id semper
                            pretium, velit lorem iaculis
                            felis, sit amet ullamcorper mauris nisl at urna. Proin vel nibh ligula. Integer id ipsum
                            quis eros sodales consectetur
                            vel elementum urna. Morbi facilisis interdum nunc eu commodo. Maecenas magna tellus, dictum
                            at dolor non, rutrum lacinia
                            tellus. Integer accumsan velit est, ac bibendum ante fringilla sit amet.</p>
                        <p>Mauris faucibus pellentesque elementum. Proin in convallis erat. Maecenas tincidunt cursus
                            euismod. Maecenas quis felis
                            diam. Suspendisse imperdiet tellus eget nunc fringilla fermentum. Fusce nisl neque, lobortis
                            sed turpis ac, faucibus
                            mattis nibh. Vivamus posuere dolor in euismod maximus. Donec velit nisi, rutrum iaculis
                            libero sollicitudin, aliquam
                            congue arcu.</p>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="single-blog-tags">
                            <a href="#" rel="tag">rooms</a>
                            <a href="#" rel="tag">video</a>
                            <a href="#" rel="tag">image</a>
                            <a href="#" rel="tag">images</a>
                            <a href="#" rel="tag">cars</a>
                        </div>
                    </div>
                </div>
                <div className="single-blog-icon">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-instagram"></i>
                </div>
                <div className="text-right">
                    <i className="fa fa-heart">1k</i>
                    <i className="fa fa-eye">50k</i>
                </div>
                
            </div>
        </footer>
    </section>
    <section className="single-post pb-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="post-section d-flex">
                        <div className="blog-post">
                            <div className="post-image">
                                <img src="images/blog-item-xs-3.jpg" alt="" />
                            </div>
                            <div className="post-link">
                                <a href="#">Previous post</a>
                                <div className="nav-post-title">
                                    <h6>A standard blog post with image</h6>
                                </div>
                            </div>
                        </div>
                        <div className="blog-next text-right">
                            <div className="blog-post-next">
                                <a href="#">Next Post</a>
                                <div className="next-title">
                                    <h6>A standard blog post with image</h6>
                                </div>
                            </div>
                            <div className="next-img">
                                <img src="images/blog-item-xs-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="comment-section pt-5 pb-5">
    <div className="container">
       <h4>4 Comments</h4>
       <article className="single-blog-article">
           <div className="article-section d-flex">
                  <div className="article-img">
                      <img src="images/author-2.jpg" alt="" />
                  </div>
                  <div className="article-content">
                           <h5>Barbara Miller</h5>
                           <span className="text-muted">May 13, 2018 at 8:21 PM</span>
                           <p>Mauris lobortis sapien non tellus maximus volutpat. Nam aliquet quis erat et luctus. Sed dignissim id felis vitae
                        fringilla. Maecenas faucibus enim eu mattis iaculis. In ultrices laoreet diam ac tempus.</p>
                  </div>
           </div>
       </article>
        <article className="single-blog-article pt-5">
            <div className="article-section d-flex">
                
                <div className="article-content">
                    <h5>Barbara Miller</h5>
                    <span className="text-muted">May 13, 2018 at 8:21 PM</span>
                    <p>Mauris lobortis sapien non tellus maximus volutpat. Nam aliquet quis erat et luctus. Sed dignissim id
                        felis vitae
                        fringilla. Maecenas faucibus enim eu mattis iaculis. In ultrices laoreet diam ac tempus.</p>
                </div>
                <div className="article-img-blog">
                    <img src="images/author-2.jpg" alt="" />
                </div>
            </div>
        </article>
        <article className="single-blog-article pt-5">
            <div className="article-section d-flex">
                <div className="article-img">
                    <img src="images/author-2.jpg" alt="" />
                </div>
                <div className="article-content">
                    <h5>Barbara Miller</h5>
                    <span className="text-muted">May 13, 2018 at 8:21 PM</span>
                    <p>Mauris lobortis sapien non tellus maximus volutpat. Nam aliquet quis erat et luctus. Sed dignissim id
                        felis vitae
                        fringilla. Maecenas faucibus enim eu mattis iaculis. In ultrices laoreet diam ac tempus.</p>
                </div>
            </div>
            <div className="text-center pt-5 pb-5">
                <button className="btn btn-outline-success">Load More</button>
            </div>
        </article>
         <div className="leave-comment pt-5">
             <h5>Leave a comment</h5>
            <div className="row">
                <div className="col-md-4">
                     <input type="text" placeholder="Name" />
                </div>
                <div className="col-md-4">
                <input type="text" placeholder="Email" /> 
                </div>
                <div className="col-md-4">
                <input type="text" placeholder="Website" />
                </div>
            </div>
           <div className="text-area-part pt-2 ml-2">
                <textarea name="" id="" cols="30" rows="10" width="100%" placeholder="Write your comment...."></textarea>
           </div>
           <div className="text-right pb-2">
                  <button className="btn btn-success btn-lg">Submit</button>
           </div>
         </div>
    </div>
</section>
    </>
  )
}

export default Text