import './modalMenu.scss'
import { MdClose } from "react-icons/md";




const ModalMenu = ({ active, setActive }) => {


    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_contant act ' : 'modal_contant'} onClick={(e) => e.stopPropagation()}>
                <div className='modal_title'>
                    <h2>Menu</h2>
                    <MdClose onClick={() => setActive(false)} />
                </div>
                <div className='modal-menu-list'>
                    <ul>
                        <li>Особенности</li>
                        <li>Отзывы</li>
                        <li>Инвестиция</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ModalMenu;