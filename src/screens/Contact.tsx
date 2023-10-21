import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
//import { EmailJSResponseStatus } from "@emailjs/browser";
type FormInputs = {
    subject: string,
    email: string,
    message: string,
};

export const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data);
        emailjs.send(
            'service_aapem17',
            'template_9175usl',
            {
                subject: data.subject,
                email: data.email,
                message: data.message
            },
            'B_YTAgMIgFginJ6Bu'
        )
    }
    return (
        <main>
            <h3>Contact</h3>
            <p>Emain: kess@gmail.com</p>
            <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                <label className="block" htmlFor="subject">subject</label>
                {/* pour enregistrer le champs */}
                <input {...register("subject", { required: true })} className="border" type="text" name="subject" id="subject" placeholder="Quel est le sujet ?" />
                {errors.subject && <span>This field is required</span>}
                <label className="block" htmlFor="email">email</label>
                <input {...register("email")} className="border" type="text" name="email" id="email" placeholder="Quel est l'email' ?" />
                <label className="block" htmlFor="email">Message</label>
                <textarea {...register("message")} className="border" name="message" id="message" placeholder="Quel est le message' ?" />


                <input className="block bg-[purple] text-[white] hover:bg-[gray]" type="submit" value="Envoyer" />
            </form>
        </main>
    )
}