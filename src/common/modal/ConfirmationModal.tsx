/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import { Modal } from "react-bootstrap-v5";

interface props {
    showModalAction: boolean;
    handleCloseModalAction: Function;
    handleApproveRejectAction: Function;
    customMessage: string;
}
const ConfirmationModel = ({
    showModalAction,
    handleCloseModalAction,
    handleApproveRejectAction,
    customMessage,
}: props) => {
    return (
        <Modal
            className="modal-sticky modal-sticky-lg modal-sticky-bottom-right my-5"
            id="kt_inbox_compose"
            role="dialog"
            data-backdrop="false"
            aria-hidden="true"
            tabIndex="-1"
            show={showModalAction}
            animation={false}
        >
            <div className="modal-content">
                <div className="d-flex align-items-center justify-content-between py-5 ps-6 pe-5">
                    <div />
                    <div className="d-flex ms-2">
                        <div
                            className="btn btn-icon btn-sm ms-2"
                            data-bs-dismiss="modal"
                            onClick={() => handleCloseModalAction()}
                        >
                            <i className="fa fa-times-circle fs-3" />
                        </div>
                    </div>
                </div>

                <div className="py-0">
                    <h3 className="fw-bold m-0 text-center">{customMessage}</h3>
                </div>
                <div className="d-block text-center">
                    <div className="d-flex my-4 justify-content-around my-5">
                        <button
                            className="btn btn-sm btn-danger btn-icon-white btn-text-white me-4"
                            onClick={() => handleCloseModalAction()}
                        >
                            <i className="fas fa-ban" />
                            No
                        </button>
                        <button
                            className="btn btn-sm btn-success btn-icon-white btn-text-white me-4"
                            onClick={() => handleApproveRejectAction()}
                        >
                            <i className="fas fa-check" />
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmationModel;
