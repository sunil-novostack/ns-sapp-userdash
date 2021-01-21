import React from "react";
import { useProductList } from "../lib/helpers/customeHook";
import { Page, Layout, DisplayText, CalloutCard, Frame } from "@shopify/polaris";
import NarvigationBar from "../components/NavigationBar";

const ProductList = () => {
  const [data, loading, error] = useProductList({ limit: 10 });

  return (
    <Frame navigation={NarvigationBar}>
      <Page title="Product list">
        <Layout>
          {loading && <DisplayText>Loading</DisplayText>}

          <div
            style={{
              display: "grid",
              justifyContent: "space-around",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "25px",
              width: "100%",
              marginTop: "20px",
            }}
          >
          {
            console.log(data,'---',error)
          }
            
          </div>
        </Layout>
      </Page>
    </Frame>
  );
};

export default ProductList;
