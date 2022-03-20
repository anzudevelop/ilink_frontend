import s from './Popup.module.css'

function Popup({active, setActive, children}) {
    return (
        <div className={active ? `${s.popup} ${s.active}` : `${s.popup}`} onClick={() => setActive(false)}>
            <div className={active ? `${s.popupContent} ${s.active}` : `${s.popupContent}`} onClick={e => e.stopPropagation()}>
                { children }
            </div>
        </div>
    );
}

export default Popup;
