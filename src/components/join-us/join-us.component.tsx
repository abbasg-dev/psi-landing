import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Col, Form } from "react-bootstrap";
import Title from "../title/title.component";
import FormInput from "../form-input/form-input.component";
import PhoneNumberField from "../phone-number-field/phone-number-field.component";
import Button from "../button/button.component";
import styles from "./join-us.module.scss";
import assets from "../../assets";

interface JoinData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}
const JoinUs = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const methods = useForm<JoinData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
  });

  const { control, handleSubmit, setValue } = methods;

  const onSubmit = (data: JoinData) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("phone", "");
    setValue("email", "");
  }, [setValue]);

  return (
    <section className={styles.joinUs} id="contact">
      <div className="container px-lg-3 px-md-3 px-3">
        <div className={styles.joinUsContainer}>
          <div
            className="position-relative p-0 me-0"
            style={{ justifyItems: isMobile ? "unset" : "left" }}
          >
            <Title title={"Join the Future of Real Estate"} />
          </div>
          <div className="row">
            <Col
              lg={6}
              md={12}
              className="px-lg-5 px-md-0 px-0 py-0 align-content-center"
            >
              <p className={styles.signup}>
                Sign up now to access exclusive content and be the first to
                explore our Metaverse platform.
              </p>
              <FormProvider {...methods}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        fieldId="firstName"
                        type="text"
                        placeholder="First Name"
                        value={field.value || ""}
                        onChange={field.onChange}
                        icon={assets.person}
                      />
                    )}
                  />
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        fieldId="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={field.value || ""}
                        onChange={field.onChange}
                        icon={assets.person}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        fieldId="email"
                        type="email"
                        placeholder="Email"
                        value={field.value || ""}
                        onChange={field.onChange}
                        icon={assets.email}
                      />
                    )}
                  />
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <PhoneNumberField
                        fieldId="phone"
                        value={field.value || ""}
                        onChange={field.onChange}
                        icon={assets.phone}
                      />
                    )}
                  />
                  <div
                    className={`d-flex justify-content-between ${styles.customGap}`}
                  >
                    <Button
                      imgSrc={assets.placholder}
                      altText={"placholder"}
                      text={"Try it For Free"}
                    />
                    <Button
                      imgSrc={assets.placholder}
                      altText={"placholder"}
                      text={"Ask us More"}
                    />
                  </div>
                </Form>
              </FormProvider>
            </Col>
            {!isMobile && (
              <Col lg={6} md={12} className="px-lg-5 px-md-0 px-0 py-5">
                <div className={styles.join3d}></div>
              </Col>
            )}
          </div>
        </div>
        {isMobile && (
          <Col lg={6} md={12} className="px-lg-5 px-md-0 px-0 py-0">
            <div className={styles.join3d}></div>
          </Col>
        )}
      </div>
      {!isMobile && (
        <img
          src={assets.ellipse7}
          className={styles.joinUsEllipse}
          alt="join-us-ellipse"
        />
      )}
      {isMobile && (
        <>
          <img
            src={assets.ellipse19}
            className={styles.leftEllipse}
            alt="left-ellipse"
          />
          <img
            src={assets.jREllipse}
            className={styles.leftBottomEllipse}
            alt="left-bottom-ellipse"
          />
        </>
      )}
    </section>
  );
};

export default JoinUs;
