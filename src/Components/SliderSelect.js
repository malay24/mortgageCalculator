import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 100000;
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        steps={100}
        unit="$"
        amount={data.homeValue}
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (value * 0.2).toFixed(0),
            loanAmount: (value * 0.8).toFixed(0)
          });
        }}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        steps={100}
        unit="$"
        amount={data.downPayment}
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0)
          });
        }}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        steps={100}
        unit="$"
        amount={data.loanAmount}
        onChange={(e, value) => {
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0)
          });
        }}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        steps={0.5}
        unit="%"
        amount={data.interestRate}
        onChange={(e, value) => {
          setData({
            ...data,
            interestRate: value
          });
        }}
      />
    </>
  );
};
export default SliderSelect;
