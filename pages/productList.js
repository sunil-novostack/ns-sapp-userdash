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
            {data.map(({ id, created_at, product_type, title, vendor, image }) => (
              <CalloutCard
                title={title}
                illustration={image.src}
                primaryAction={{
                  content: "Demo button",
                  url: "https://www.shopify.com",
                }}
              >
                <DisplayText size="small">Id:- {id}</DisplayText>
                <DisplayText size="small">Created At:- {new Date(created_at).toLocaleDateString()}</DisplayText>
                <DisplayText size="small">Product Type:- {product_type}</DisplayText>
                <DisplayText size="small">Vendor:- {vendor}</DisplayText>
              </CalloutCard>
            ))}
          </div>
        </Layout>
      </Page>
    </Frame>
  );
};

export default ProductList;
