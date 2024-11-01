import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButton({
  assignmentId,
}: {
  assignmentId: string;
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAssignment(assignmentId));
  };
  return (
    <div className="float-end">
      <FaTrash onClick={handleDelete} className="fs-4" />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
