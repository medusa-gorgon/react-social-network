import preloader from '../../assets/images/eclipse.svg';

let Preloader = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <img src={preloader} alt='loading' />
    </div>
  );
};

export default Preloader;
