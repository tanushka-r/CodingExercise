import './action-link.styles.scss';

const ActionLink = ({onClickHandler, label}) => {
    return (
      <button id="button_clearFilters" className="action-link" onClick={onClickHandler}>{label}</button>
    )
}

export default ActionLink;