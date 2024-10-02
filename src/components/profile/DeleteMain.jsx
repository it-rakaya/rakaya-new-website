import React from "react";
import ModalComp from "../ModalComp";
import Button from "../Button";
import { useMutate } from "../../hooks/useMutate";
import { notify } from "../../utils/notify";

function DeleteMain({ isOpen, close, id, refetch, endpointDelete }) {
  const { mutate: deleteItm, isPending } = useMutate({
    mutationKey: [`${endpointDelete}/${id}`],
    endpoint: `${endpointDelete}/${id}`,
    onSuccess: (data) => {
      notify("success", "تم الحذف بنجاح");
      refetch();
      close();
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
    formData: true,
    method: "Delete",
  });
  return (
    <div>
      <ModalComp
        isOpen={isOpen}
        closeModal={close}
        alert
        header={"هل انت متاكد من هذه العملية ؟"}
        Footer={
          <div className="d-flex justify-content-center gap-4">
            <Button
              color="secondary"
              style={{
                width: "0px",
                display: "flex",
                justifyContent: "center",
              }}
              isLoading={isPending}
              onClick={() => deleteItm()}
            >
              نعم
            </Button>
            <Button
              color="primary"
              style={{
                width: "0px",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={close}
            >
              لا
            </Button>
          </div>
        }
      />
    </div>
  );
}

export default DeleteMain;
