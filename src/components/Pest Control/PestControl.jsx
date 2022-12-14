import React from "react";
import "./PestControl.css";

function PestControl() {
  return (
    <div className="pestControl">
      <div className="pestControl__body">
        <h3 className="pestHeading">Pests And Pest Control Introduction</h3>

        <div className="pestChart">
          <table class="table-auto">
            <tbody>
              <tr>
                <td>Ants</td>
                <td>Bats</td>
                <td>Bed Bugs</td>
                <td>Bees</td>
                <td>Cockroaches</td>
              </tr>
              <tr>
                <td>Fleas</td>
                <td>Flies</td>
                <td>Mice</td>
                <td>Mosquitoes</td>
                <td>Pigeons</td>
              </tr>
              <tr>
                <td>Rats</td>
                <td>Snakes</td>
                <td>Spiders</td>
                <td>Termites</td>
                <td>Wasps</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="">
          <p className="">
            Pest Control at it’s finest means that not all guests are welcome in
            your home! When you invite guests into your home that stay a few
            days, what do you do? You provide food, and a place to sleep!
          </p>
          <p className="">
            Do you really think it’s different when unwanted guests (I’m now
            speaking of pests, not teenagers!) come into your home? Why do they
            come in? They want to be comfortable – away from the heat of the
            summer or the cold in winter, just like you and me. They find
            themselves food and a place to hunker down! Same thing. Some just
            find their way in, some get dragged in on shoes, clothing and things
            we carry into our home like groceries or firewood. Others are born
            in your home.
          </p>
          <p className="">
            Pest Control at it’s finest means that not all guests are welcome in
            your home! When you invite guests into your home that stay a few
            days, what do you do? You provide food, and a place to sleep!
          </p>
          <p className="">
            This article addresses several types of common pests but this list
            is address is far from complete! A couple of examples are ants and
            roaches. There are carpenter ants, and there are fire ants. In fact
            there are many more types of ants, but we’ll get to that in a
            minute! Then there are roaches!
          </p>
          <p className="">
            The American cockroaches and German cockroaches are different, and
            need very different services when doing pest control.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PestControl;
