import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditeMode = () => {
        setEditMode(true);
    };

    const deactivateEditeMode = () => {
        setEditMode(false); 
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (<div>
        {!editMode &&
            <div>
                <b>Status: </b><span onDoubleClick={activateEditeMode}>{props.status || "Установите статус"}</span>
            </div>
        }
        {editMode &&
            <div>
                <input onChange={onStatusChange} type="text" autoFocus={true}
                    onBlur={deactivateEditeMode} value={status} />
            </div>
        }
    </div>
    )
};

export default ProfileStatusWithHooks;