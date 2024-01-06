import React from "react";

const About = () => {
  return (
    <div className="container p-5 sm:p-5 md:p-16">
      <h1 className='min-[200px]:text-lg sm:text-2xl md:text-3xl font-bold min-[200px]:w-60 md:w-96 m-auto text-center shadow-lg px-1 py-3 rounded-md bg-green-600 text-white stroke-green-600'>
        About
      </h1>
      <p className="my-2 mt-5 text-md text-semibold font-mono text-left">
        <b className="text-green-600">Asslam-o-Aliakum Guys!</b> This is
        MadeinPakistan.pk, here we list all those companies and their popular
        product which belong to Pakistan. Its means here you will find your own
        country(Pakistan) brands which made products with the tag of Made in
        Pakistan. In this version, we have list almost all popular companies of
        Pakistan. Might be chance some companies are miss in this version, but
        we will try to add all of those in our upcoming updates.
      </p>
      <p className="my-2 text-semibold text-md font-mono text-left">
        <b className="text-green-600">Purpose: </b> The primary purpose of
        building this site is enhance peoples understanding about their
        home-made companies and their products as well as support to Pakistani
        companies and their products. One of another big purpose of creating
        this site is boost confidence of our Pakistani companies owners and
        founders, so they do more innovations and made products which compete on
        world level.
      </p>
      <p className="my-2 text-semibold text-md font-mono text-left">
        <b className="text-green-600">Listing Factor :</b> On this site we list
        companies on the based of 3 factor. First is company ownership or stock
        mostly owned by Pakistanis, Second is company mainly oprating in
        Pakistan,third and last factor is company extablished by Pakistani.
      </p>
      <p className="my-2 text-semibold text-md font-mono text-left">
        <b className="text-green-600">Note :</b> If you a company owner or know
        a companies which doing amazing job. Then feel free to DM Shahriyar
        Ahmad on LinkdIn. I will try to add that company after review in
        upcoming version of this site. Thanks
      </p>
      <div className="min-[200px]:w-[80%] md:w-[400px] h-[125px] min-[200px]:text-md md:text-lg text-center font-serif justify-center items-center rounded-md shadow-xl mt-4 m-auto  p-4 bg-green-500 text-white text-wrap cursor-pointer">
        <p className="text-semibold">
          " I believe this my small effort bring <br /> an big impact "
        </p>
        <b className="text-bold mt-4">
          <i>Shahriyar Ahmad</i>
        </b>
      </div>
      <div className="tablebox mt-4 m-auto text-lg">
        <table className="table-auto bg-green-500 text-white text-bold md:w-[500px] h-[200px] p-4 m-auto rounded-lg">
          <tbody className="text-left p-2">
            <tr className="table-row border-2 p-4">
              <td className="py-2 px-4 border-b">Founder</td>
              <td className="py-2 px-4 border-b">Shahriyar Ahmad</td>
            </tr>
            <tr className="table-row border-2">
              <td className="py-2 px-4 border-b">Founded</td>
              <td className="py-2 px-4 border-b">1st Jan, 2024</td>
            </tr>
            <tr className="table-row border-2 p-2">
              <td className="py-2 px-4 border-b">Tech Stack</td>
              <td className="py-2 px-4 border-b">React, React Redux, Tailwindcss</td>
            </tr>
            <tr className="table-row border-2 p-2">
              <td className="py-2 px-4 border-b">Source Code</td>
              <td className="py-2 px-4 border-b">Github Repo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
