import axios from "@/configs/axios";

const all = (options = { params: { status: "published" } }) => {
  axios.get(`/courses`, options).then((res) => res.data);
};

const details = (id: string) => {
  axios.get(`/courses/${id}`).then((res) => res.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  all,
  details,
};
