import './Button.css'

//esto es un componente el cual debe llevar la minima logica posible.

interface Props {
  label: string,
  parentMethod: () => void
}
export const Button = ({label, parentMethod}: Props) => {


  return (
    <>   
        <button  className='custom-buttom' onClick={parentMethod}>
          {label}
        </button>
    </>
  )
}

