import React from 'react';
import fly from '../assets/images/fly.svg';

function Content(props) {
    return (
        <section className="bg-pegasus-yellow rounded-t-3xl flex items-center">
            <div className="container">
                <img src={fly} alt="" className="md:w-2/5 sm:w-auto mx-auto" />
                    <div className="content flex items-center flex-col md:flex-row ">
                        <h1 className="text-pegasus-white font-bold text-4xl md:text-6xl p-4 flex-4 md:w-2/3 leading-snug">Pegasus
                            Digiturk iş birliği</h1>
                        <p className="text-pegasus-white p-4 flex">Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Mollitia consectetur dicta ducimus obcaecati harum officiis repudiandae dolorum nihil
                            cum recusandae soluta commodi, autem dolor impedit quo assumenda, nostrum doloribus
                            exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam tempora
                            omnis. Ex quibusdam vel laborum autem iure veritatis nisi sed, impedit cupiditate at sunt
                            fuga recusandae deserunt hic dolorem?
                        </p>
                    </div>


                    <div className="flex justify-center">
                        <div className="w-full md:max-w-lg">
                            <form className="pb-8 mb-4 my-18 ">
                                <div className="grid grid-cols-2 gap-4 px-3 md:px-0">
                                    <div>
                                        <label className="block text-grey-darker text-sm font-bold mb-2"
                                               htmlFor="username">
                                            Ad
                                        </label>
                                        <input
                                            className="shadow appearance-none border-bg-gray rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                            id="username" type="text" placeholder="Ad" />
                                    </div>
                                    <div>
                                        <label className="block text-grey-darker text-sm font-bold mb-2"
                                               htmlFor="password">
                                            Soyad
                                        </label>
                                        <input
                                            className="shadow appearance-none border-bg-gray rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                            id="username" type="text" placeholder="Soyad" />

                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="mail">
                                            E-Posta Adresi
                                        </label>
                                        <input
                                            className="shadow appearance-none border-bg-gray rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                            id="mail" type="mail" placeholder="***@***.com" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-grey-darker text-sm font-bold mb-2"
                                               htmlFor="phone">
                                            Telefon Numarası
                                        </label>
                                        <input
                                            className="shadow appearance-none border-bg-gray rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                            id="phone" type="tel" placeholder="05**" maxLength="11" />

                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="btn btn-error text-pegasus-white btn-wide">KAYIT OL</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Content;