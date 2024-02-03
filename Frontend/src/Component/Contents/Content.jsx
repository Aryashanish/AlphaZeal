// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link} from 'react-router-dom'

export const Content = () => {
  return (
    <div className="content p-4 bg-white md:p-3 sm:p-2">
            <p className="text-start text-5xl font-bold">We create content that gives your brand a personality, a voice, and a look that makes you stand out from the crowd.</p>
            <div className="content-box flex justify-between p-3">
                <div className='content-text-box w-1/2'>
                    <div className="text-2xl my-4">      
                        <p className='content-text'> We paint with pixels and sculpt with sound, we're the Everest climbers of the marketing world. We conquer challenges with ambitious brands.<br/></p>
                        <p className="content-text my-2">We're not ad makers, we're the brand storytellers who paint with pixels and sculpt with sound that makes your brand come alive! We partner with the coolest brands to cook up original content that their audiences can't get enough of and are here to break the mould and make your brand the next internet legend.
<br /></p>
                    <br></br>
                        <Link
                              to={"/about"}
                              className="mx-1 border-solid border-2 text-lg border-black rounded-xl px-1 font-bold"
                          >
                            Read Me &#8594;
                        </Link>
                        <Link
                            to={"/work"}
                            className="mx-1 border-solid border-2 text-lg border-black rounded-xl px-1 font-bold"  
                          >
                            View Our Work &#8594;
                        </Link>
                    </div>
                </div> 

                <div className="content-img my-4 flex place-items-center w-1/2">
                      <img src="https://imgs.search.brave.com/U-BQlvuxhkCTjjDOnniZOyVrpi3iq5hyOTvpmSB9mro/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL0J1bGwt/RG93bmxvYWQtUE5H/LnBuZw" alt="not found" />
                </div>  
            </div>
          </div>
  )
}
