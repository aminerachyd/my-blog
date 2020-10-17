import swal from "@sweetalert/with-react";

export const fireSuccessAlert = (alertText = "", alertTitle = "Success !") => {
  swal({
    icon: "success",
    title: alertTitle,
    text: alertText,
  });
};

export const fireInfoAlert = (
  alertText = "",
  confirm = false,
  alertTitle = "Information"
) => {
  swal({
    icon: "warning",
    title: alertTitle,
    text: alertText,
  });
};

export const fireErrorAlert = (alertText = "", alertTitle = "Oops ..") => {
  swal({
    icon: "error",
    title: alertTitle,
    text: alertText,
  });
};
