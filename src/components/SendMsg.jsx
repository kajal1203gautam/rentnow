import React from 'react'

const SendMsg = () => {
  return (
    <section class="map-section pt-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.571301669369!2d78.59635525089486!3d25.452592183698385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3977712617ef9cff%3A0x555ae45b9967c820!2sBinplus%20Technologies%20(P)%20Limited!5e0!3m2!1sen!2sin!4v1642099640637!5m2!1sen!2sin"
                   width={"100%"} height={"400px"} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 pt-5">
                <h5 class="">Send Message</h5>
                <div class="container">
                    <form action="action_page.php">
                  
                      <label for="fname">First Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                  
                      <label for="lname">Last Name</label>
                      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
{/*                   
                      <label for="country">Country</label>
                      <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                      </select> */}
                  
                      <label for="subject">Subject</label>
                      <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                  
                      <button className='btn btn-success'   type="submit" value="Submit" >Submit</button>
                  
                    </form>
                  </div>
            </div>


            <div class="col-md-6 pt-5">
                <h5>Contact Info</h5>
                <div class="contact-info">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-icon">
                                <i class="fa fa-map-marker"></i>
                                <h6>Head Office</h6>
                            </div>
                            <p>1425 Pointe Lane, Miami
                                Florida – 33169, USA</p>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-icon">
                                <i class="fa fa-map-marker"></i>
                                <h6>Branch 1</h6>
                            </div>
                            <p>1425 Pointe Lane, Miami
                                Florida – 33169, USA</p>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-icon">
                                <i class="fa fa-map-marker"></i>
                                <h6>Branch 2</h6>
                            </div>
                            <p>1425 Pointe Lane, Miami
                                Florida – 33169, USA</p>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-icon">
                                <i class="fa fa-map-marker"></i>
                                <h6>Branch 3</h6>
                            </div>
                            <p>1425 Pointe Lane, Miami
                                Florida – 33169, USA</p>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-icon">
                                <i class="fa fa-phone"></i>
                                <h6>Phone</h6>
                            </div>
                            <p>(954)-944-1250
                                (954)-944-1251</p>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-icon">
                                <i class="fa fa-envelope"></i>
                                <h6>E-mail</h6>
                            </div>
                            <p>sale@example.com
                                support@example.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
  )
}

export default SendMsg