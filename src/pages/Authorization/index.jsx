import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input, Button, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Container } from "@mui/material";
import { SiYoutubeshorts } from "react-icons/si";
import api from "../../utils/api";
import styles from "./index.module.css";

const Authorization = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (dataUser) => {
    try {
      const response = await api.post("/auth/login", dataUser);

      localStorage.setItem("token", response.data.token);
      navigate("/");

      reset();
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  return (
    <Container
      sx={{
        mt: "5%",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.registration_form}
      >
        <div>
          <SiYoutubeshorts style={{ fontSize: "50px", width: "60px" }} />
          <h1>Authorization</h1>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Введите корректный email",
              },
            }}
            render={({ field }) => <Input {...field} placeholder="Email" />}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label>Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 6,
                message:
                  "Пароль должен быть не меньше 6 символов и содержать хотя бы одну заглавную букву",
              },
              validate: (letter) => {
                return (
                  letter
                    .split("")
                    .filter((item) => !isFinite(item))
                    .map((item) => item === item.toUpperCase())
                    .includes(true) ||
                  "Пароль должен содержать хотя бы одну заглавную букву"
                );
              },
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Enter your password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            )}
          />
          <p>{errors.password?.message}</p>
        </div>

        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default Authorization;
