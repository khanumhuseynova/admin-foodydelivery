import React from 'react';
import './ModalDelete.css';

const ModalDelete = ({ onDialog }) => {
	return (
		<div onClick={() => onDialog(false)} className="modalDelete">
			<div onClick={(e) => e.stopPropagation()} className="modal__container">
				<h2 className="modal__title">Are you sure it’s deleted ?</h2>
				<p className="modal__text">Attention! If you delete this product, it will not come back...</p>
				<div className="modal__button">
					<button onClick={() => onDialog(false)}>cancel</button>
					<button onClick={() => onDialog(true)} className="modal__red">
						delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalDelete;
