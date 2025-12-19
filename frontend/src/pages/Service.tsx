import React from "react";
import menu from "../assets/menu.png";
import dining from "../assets/dining.png";
import creativecusine from "../assets/creativecusine.png";
import arrow from "../assets/arrow.png";
import taste from "../assets/taste.png";
import user from "../assets/user.png";
import qrimage from "../assets/qrimage.png";


const Service = () => {
  return (

      <div className="grid gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mt-28 mb-24 mx-auto max-w-5xl px-4">

  {/* Card 1 */}
  <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-[#1C6EA4] hover:shadow-lg">

    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <img src={menu} alt="" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-foreground text-[#154D71]">Menu Discovery</h3>
    <p className="mb-4 text-muted-foreground text-[#1C6EA4]">
      Explore a variety of restaurant menus effortlessly
    </p>
  </div>

  {/* Card 2 */}
  <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-[#1C6EA4] hover:shadow-lg">

    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
      <img src={dining} alt="" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-foreground text-[#154D71]">Social dining</h3>
    <p className="mb-4 text-muted-foreground text-[#1C6EA4]">
      Connect with other food enthusiasts and share dining experiences
    </p>
  </div>

  {/* Card 3 */}
  <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-[#1C6EA4] hover:shadow-lg">

    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
      <img src={creativecusine} alt="" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-foreground text-[#154D71]">Creative cuisine</h3>
    <p className="mb-4 text-muted-foreground text-[#1C6EA4]">
      Indulge in visually captivating dishes and culinary innovations
    </p>
  </div>

  {/* Card 4 */}
  <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-[#1C6EA4] hover:shadow-lg">

    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <img src={taste} alt="" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-foreground text-[#154D71]">User-friendly ordering</h3>
    <p className="mb-4 text-muted-foreground text-[#1C6EA4]">
      Empower users to self-order with ease, enhancing their dining experience
    </p>
  </div>

  {/* Card 5 */}
  <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-[#1C6EA4] hover:shadow-lg">

    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
      <img src={user} alt="" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-foreground text-[#154D71]">Data Analysis</h3>
    <p className="mb-4 text-muted-foreground text-[#1C6EA4]">
      Data cleaning, preprocessing, visualization dashboards, and business intelligence.
    </p>
  </div>

  {/* Card 6 */}
  <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-[#1C6EA4] hover:shadow-lg">

    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
      <img src={qrimage} alt="" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-foreground text-[#154D71]">QR stand integration</h3>
    <p className="mb-4 text-muted-foreground text-[#1C6EA4]">
      Easily access menus with our QR Stand feature, enabling quick scanning for instant menu viewing.
    </p>
  </div>

</div>

  );
};

export default Service;

