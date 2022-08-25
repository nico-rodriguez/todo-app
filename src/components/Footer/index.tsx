import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      created by{' '}
      <a
        href='https://github.com/nico-rodriguez/front-end-developer-devChallenges/tree/master/todo-app'
        className='footer__link'
        target='_blank'
        rel='noreferrer'
      >
        nico-rodriguez
      </a>{' '}
      -{' '}
      <a
        href='https://devchallenges.io/'
        className='footer__link'
        target='_blank'
        rel='noreferrer'
      >
        devChallenges.io
      </a>
    </footer>
  );
}
