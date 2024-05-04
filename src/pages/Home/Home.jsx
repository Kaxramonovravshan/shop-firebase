import React, { useEffect } from "react";
import { connect } from "react-redux";
import { productAction } from "../../utils/reducer/productReducer";
import { Card, CardBody, CardFooter, Image, Spacer } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import CustomCard from "../../components/CustomCard/CustomCard";

const Home = (props) => {
  useEffect(() => {
    props.loadProduct();
  }, []);

  return (
    <>
      <div className="p-3">
        {props.isLoading ? (
          <div className="flex gap-4 justify-center mt-5 flex-wrap">
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </div>
        ) : (
          <div className="grid mt-5 grid-cols-2 sm:grid-cols-4">
            {props.product.map((itm, index) => (
              <div>
                <Card
                  shadow="sm"
                  key={index}
                  isPressable
                  onPress={() => console.log("itm pressed")}
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={itm.title}
                      className="w-full object-cover h-[140px]"
                      src={itm.img}
                    />
                  </CardBody>
                  <CardFooter className="flex-col gap-4">
                    <h1 className="mx-auto text-3xl font-mono">{itm.name}</h1>
                    <h3 className="mx-auto text-xl font-mono">
                      {itm.price}/so'm
                    </h3>
                    <div className="flex items-center gap-4">
                      <Button color="warning" variant="solid">
                        Learn more
                      </Button>
                      <Button color="warning" variant="bordered">
                        Buy
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default connect((state) => ({ ...state.product }), productAction)(Home);
