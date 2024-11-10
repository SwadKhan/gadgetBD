import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default class Statistic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("/gadgetData.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((product) => ({
          name: product.product_title,
          price: product.price,
        }));
        this.setState({ data: formattedData });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    const { data } = this.state;

    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
