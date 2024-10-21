"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BodyBold } from "../texts/page";
import { sendEmail } from "@/apps/emailJS";
import { ContactFormProps } from "@/infrastructure/interfaces/contact";

const ContactForm = () => {
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [failure, setFailure] = useState<string | undefined>(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormProps>();

  const onSubmit = async (data: ContactFormProps) => {
    try {
      const response = await sendEmail(data);

      if (response) {
        setSuccess("Email sent successfully");
        setFailure(undefined);
        reset();
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setFailure("Failed to send email.");
      setSuccess(undefined);
    }
  };

  return (
    <div className="w-full max-w-screen-md lg:max-w-screen-lg mx-auto pb-5 px-2 md:px-3 bg-white shadow-lg rounded-3xl ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full pt-2">
        <div className="flex flex-col gap-5 md:px-5 w-full">
          {/* Name and Phone Fields */}
          <div className="flex flex-row w-full justify-center gap-2">
            <div className="w-[50%]">
              <label
                htmlFor="nombre"
                className="block font-medium text-gray-700">
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                {...register("nombre", { required: true })}
              />
              {errors.nombre && (
                <span className="text-red-500 text-sm">
                  Nombre es requerido
                </span>
              )}
            </div>

            <div className="w-[50%]">
              <label
                htmlFor="telefono"
                className="block font-medium text-gray-700">
                Teléfono
              </label>
              <input
                id="telefono"
                type="tel"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                {...register("telefono", { required: true })}
              />
              {errors.telefono && (
                <span className="text-red-500 text-sm">
                  Teléfono es requerido
                </span>
              )}
            </div>
          </div>

          {/* Email and Subject Fields */}
          <div className="flex flex-row w-full justify-center gap-2">
            <div className="w-[50%]">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                {...register("email", {
                  required: "Email es requerido",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email inválido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message as string}
                </span>
              )}
            </div>

            <div className="w-[50%]">
              <label
                htmlFor="asunto"
                className="block font-medium text-gray-700">
                Asunto
              </label>
              <input
                id="asunto"
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                {...register("asunto", { required: true })}
              />
              {errors.asunto && (
                <span className="text-red-500 text-sm">
                  Asunto es requerido
                </span>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="mensaje"
              className="block font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent max-h-48 resize-y min-h-20"
              {...register("mensaje", { required: true })}
            />
            {errors.mensaje && (
              <span className="text-red-500 text-sm">Mensaje es requerido</span>
            )}
          </div>
        </div>

        {/* Success / Failure Messages */}
        <div className="mt-5 w-full max-w-lg mx-auto grid items-center justify-center md:px-5 text-center">
          <div className="w-full">
            {success && (
              <div className="flex text-green-600 text-center m-auto">
                {success}
              </div>
            )}
            {failure && (
              <div className="flex text-red-500 text-center">{failure}</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-10 w-full py-2  bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75 transform transition-transform duration-300 ease-in-out hover:scale-105">
              <BodyBold>{isSubmitting ? "Enviando..." : "Enviar"}</BodyBold>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
