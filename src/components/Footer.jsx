import React from 'react'
import '../style/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className='footer-relative footer-navbar'>
        <p>© 2022 TheGreenWay. All rights reserved.</p>
        <div className='icons'>
            <button>
                <FontAwesomeIcon icon={faFacebook} />
            </button>
            <button>
                <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button>
                <FontAwesomeIcon icon={faTwitter} />
            </button>
        </div>
    </div>
  )
}