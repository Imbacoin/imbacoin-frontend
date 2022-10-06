import React, {useEffect, useRef, useState} from "react";
import bg_card_under_player from '../images/bg_card_under_player.png'
import bg_card_under_player_bg from '../images/bg_card_under_player_bg.png'
import back_icon from '../images/back_icon.svg'
import coins from '../images/coins.svg'
import paypal from '../images/paypal.png'
import gsap from "gsap";
import { Formik, Field, Form, useField, useFormikContext } from 'formik';
import SearchBar from "./searchBar";


function BuyForm() {
    const formik_wrapper_Ref = useRef()
    const tl_formik_wrapper = useRef()

    const MoneyField = (props) => {
        const {
            values: { coins },
            setFieldValue,
        } = useFormikContext();
        const [field] = useField(props);

       useEffect(() => {
                setFieldValue(props.name, `$ ${coins/50}`);
        }, [coins, setFieldValue, props.name]);

        return (
            <>
                <input {...props} {...field} disabled className="inputField"/>
            </>
        );
    };

    useEffect(() => {
        tl_formik_wrapper.current = gsap.timeline({paused: true})
        tl_formik_wrapper.current.to(formik_wrapper_Ref.current, {x: -50, autoAlpha:0,ease: 'power3.inOut'})
        tl_formik_wrapper.current.to(".options_wrapper", { left: '50px', autoAlpha:1, ease: 'power3.inOut'})
        tl_formik_wrapper.current.to(".paymentEl", { x: 0, opacity:1, duration:1,ease: 'power2.out'})
    }, [])

    const showAllOptions = ()=>{
        if (!formik_wrapper_Ref.current.classList.contains('active')) {
            formik_wrapper_Ref.current.classList.add('active')
            tl_formik_wrapper.current.timeScale(1).play()
        } else {
            formik_wrapper_Ref.current.classList.remove('active')
            tl_formik_wrapper.current.timeScale(2).reverse()
        }
    }
    const closeAllOptions = ()=>{
            formik_wrapper_Ref.current.classList.remove('active')
            tl_formik_wrapper.current.timeScale(2).reverse()
    }

    const payments = [
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },
        {name: 'Paypal', img: paypal },

    ]

    return (
        <div className="buy_form_wrap">
            <div className="posr">
                <div className="bg_ball_top"></div>
                <div className="bg_ball_bottom"></div>
                <div className="middle_box">
                    <div className="col p50">
                        <div className="card">
                            <img src={bg_card_under_player_bg} alt=""
                                 style={{height: '102%', top: '28vh'}}
                            />
                            <img src={bg_card_under_player} alt=""/>
                        </div>
                    </div>
                    <div className="col p50">
                        <div className="formik_wrapper" ref={formik_wrapper_Ref}>
                        <Formik
                            initialValues={{
                                coins: 10000,
                                money: 120,
                                email: '',
                                card: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            {((props) => {
                                    const {values, errors, touched, handleChange, handleBlur} = props;
                                    return (
                                        <Form>
                                            <div>The coins you will get</div>
                                            <div className="coins_value_wrap">
                                                <div className="coins_value">
                                                    {`${values.coins}`}
                                                </div>
                                                <div className="coins">
                                                    <img src={coins} alt=""/>
                                                </div>
                                            </div>
                                            <Field
                                                type="range"
                                                id="coins"
                                                name="coins"
                                                min='0'
                                                max='50000'
                                                step='10000'
                                            />
                                            <label htmlFor="money">The money you will pay</label>
                                            <MoneyField name="money" />

                                            <label htmlFor="email">Email</label>
                                            <Field
                                                className="inputField"
                                                id="email"
                                                name="email"
                                                placeholder=""
                                                type="email"
                                            />
                                            <label htmlFor="card">Card Info</label>
                                            <Field
                                                className="inputField"
                                                id="card"
                                                name="card"
                                                placeholder=""
                                                type="text"
                                            />
                                            <button className="submitBtn" type="submit">Pay With Card</button>
                                            <div className="submitOptions" onClick={showAllOptions} >All Other Options</div>
                                        </Form>
                                    )
                                }
                            )}
                        </Formik>
                        </div>
                        <div className="options_wrapper">
                            <div className="back" onClick={closeAllOptions}>
                                <div className="back_icon">
                                    <img src={back_icon} alt=""/>
                                </div>
                                <div className="back_text">Back</div>
                            </div>
                            <SearchBar />
                            <div className="options">
                                <ul>
                                    {
                                        payments.map((el,index)=>(
                                        <li key={index} className="paymentEl">
                                            <div className="payment_wrap">
                                                <div className="payment_img">
                                                    <img src={el.img} alt=""/>
                                                </div>
                                                <div className="name">
                                                    {el.name}
                                                </div>
                                            </div>
                                        </li>
                                        ))

                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>

            </div>
        </div>
    );
}

export default BuyForm;