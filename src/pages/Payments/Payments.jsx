import React from "react";
import "./Payments.css";

function Payments() {
  return (
    <div className="payments">
      <div className="payments__table">
        <table class="table-auto">
          <thead>
            <tr>
              <th className="tableHead">Packages</th>
              <th className="tableHead">
                $ 250<span>/mon</span>
              </th>
              <th className="tableHead">
                $ 500<span>/mon</span>
              </th>
              <th className="tableHead">
                $ 750<span>/mon</span>
              </th>
              <th className="tableHead">
                $ 1000<span>/mon</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Bronze</td>
              <td>Silver</td>
              <td>Gold</td>
              <td>Platinum</td>
            </tr>
            <tr>
              <td>Bonus Percentage</td>
              <td>20%</td>
              <td>30%</td>
              <td>40%</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Bonus Units</td>
              <td>50</td>
              <td>150%</td>
              <td>300</td>
              <td>500</td>
            </tr>
            <tr>
              <td>Total Units Purchased</td>
              <td>300</td>
              <td>650</td>
              <td>1050</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>Recharge Message</td>
              <td>50</td>
              <td>150</td>
              <td>200</td>
              <td>250</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button>Subscribed</button>
              </td>
              <td>
                <button>Upgrade</button>
              </td>
              <td>
                <button>Upgrade</button>
              </td>
              <td>
                <button>Upgrade</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payments;
