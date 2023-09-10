import { TypeAnimation } from 'react-type-animation';

const Typewriter = ({text, repeat, speed}) => {
  console.log(text.data instanceof Array);
  if(Array.isArray(text)){
    return (
      <div>
      <TypeAnimation
    sequence={text}
        wrapper="span"
        speed={speed}
        repeat={repeat}
        style={{display: 'inline-block' }}
      />
    </div>
    );
  }else{
    return(
      <div>
      <TypeAnimation
    sequence={[text]}
        wrapper="span"
        speed={speed}
        repeat={repeat}
        style={{display: 'inline-block' }}
      />
    </div>
    );
  }
  };
export default Typewriter;