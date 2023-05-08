import AbpButton from '@/components/common/AbpButton';
import notFound from '../../public/notFound.png'
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { FiHome } from 'react-icons/fi'

const NotFoundPage = () => {
  return (
    <div className="notFoundWrapper">
      <Container>     
        <h2>Hmm...</h2>
        <p>Looks like you coded your way onto a hidden page!</p>
        <div className="notFoundCover">
          <Image 
            src={notFound}
            alt="notfound" 
            height="300"
            width="500"
          />
        </div>
        
        <AbpButton path="/">
          <FiHome />
        </AbpButton>
      </Container>
    </div>
  )
}

export default NotFoundPage