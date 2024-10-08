import React from "react";
import { useAuth } from "../../context/auth/AuthProvider";
import { useMutate } from "../../hooks/useMutate";
import { notify } from "../../utils/notify";
import Switch from "../form/Switch";
import CircularProgress from '@mui/material/CircularProgress'; 

function ButtonUpdateCv({ label, value, disabled, checked, name }) {
  const { setUser } = useAuth();
  const endpoint = "candidate-profile";
  const { mutate: postData, isPending } = useMutate({
    mutationKey: [endpoint],
    endpoint: endpoint,
    onSuccess: (data) => {
      notify("success", "تم تعديل البيانات بنجاح");
      setUser(data?.data?.candidate);
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
    formData: true,
  });

  const handleChange = () => {
    const updatedValue = {
      [name]: value == 1 ? 0 : 1,
    };
    postData(updatedValue);
  };

  return (
    <div>
      <Switch
        checked={checked}
        label={isPending ? <CircularProgress size={20} className="text-black" /> : label}
        onChange={handleChange}
        disabled={isPending} 
      />
    </div>
  );
}

export default ButtonUpdateCv;
