import { toast } from "react-toastify";

const SingleColor = ({index, color}) => {
    // console.log(color);
        const {hex, weight} = color;
        const saveToClipboard = async () =>{
            if (navigator.clipboard) {
                try {
                    await navigator.clipboard.writeText(`#${hex}`)
                    toast.success('Color copied to clipboard')
                } catch (error) {
                   toast.error('Failed to copy Color  to clipboard')

                    
                }
            }
            else{
                toast.error('ClipBoard not available')
            }
        }
  return (
    <article className={index > 9 ? 'color color-light' : 'color'}
    style={{background:`#${hex}`}} onClick={saveToClipboard} > 
        <p className="percent-value">{weight}%</p>
        <p className="color-value">#{hex}</p>
    </article>
  )
}
export default SingleColor