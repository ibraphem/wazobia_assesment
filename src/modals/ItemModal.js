import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { setItemModal } from "../redux/slices/modalSlice";
import { itemSchema } from "../utils/formValidationSchema";
import { fetchItems, saveItem, updateItem } from "../redux/slices/itemSlice";


const ItemModal = () => {
  const dispatch = useDispatch();
  const itemModal = useSelector((state) => state.modal?.itemModal);
  const addEditLoading = useSelector((state) => state.item?.addEditLoading);


  const initialValues = {
    name: itemModal?.item?.name,
    description: itemModal?.item?.description,
  };


  const closeModal = () => {
    dispatch(
      setItemModal({
        status: false,
        item: null,
      })
    );
  };

  const handleSubmit = async (values) => {
    if (itemModal?.item) {
      dispatch(updateItem({payload: values, id: itemModal?.item?._id})).then((res)=> {
        if(res?.payload?.status) {
          dispatch(fetchItems())
        }
      })
    } else {
      dispatch(saveItem({payload: values})).then((res)=> {
        if(res?.payload?.status) {
          dispatch(fetchItems())
        }
      })
    }

    
    closeModal()
  };

 

  return (
    <Modal isOpen={itemModal?.status} closeModal={closeModal}>
      <div className="w-[80vw] md:w-[500px] lg:w-[500px] opacity-[1]">
        <div className="w-full border-b-[1px] border-brdlight font-bold px-8 py-4">
          <h2>Create Item</h2>
        </div>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={itemSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ isValid, dirty }) => (
            <Form action="" className="my-4 mx-8">
              <div className="w-full mb-4">
                <label htmlFor="" className="">
                  Name
                </label>
                <Field
                  name="name"
                  placeholder="Input item name here"
                  className="block border-[1px] border-brdlight h-[40px] w-full p-2  rounded-[4px] outline-none"
                />
              </div>
              <div className="w-full mb-4">
                <label htmlFor="" className="">
                  Add Note
                </label>
                <Field
                  component="textarea"
                  name="description"
                  placeholder="Type here"
                  className="block border-[1px] border-brdlight h-[150px] w-full outline-none p-4"
                />
              </div>
              <div className="flex justify-end my-4 ">
                <button
                  onClick={closeModal}
                  className="h-[40px] w-[80px] mx-6 bg-[#efeff0] font-[500] rounded-[4px]"
                >
                  Cancel
                </button>
                <button
                  disabled={itemModal?.item && isValid && !addEditLoading ? false : !itemModal?.item && dirty && isValid && !addEditLoading ? false : true}
                  type="submit"
                  className={`h-[40px] w-[150px] text-white font-[500] rounded-[4px] ${
                    itemModal?.item && isValid && !addEditLoading
                      ? "bg-btnActive" : !itemModal?.item && dirty && isValid && !addEditLoading
                      ? "bg-btnActive"
                      : "bg-btnDisabled2"
                  }`}
                >
                  {itemModal?.item ? "Update Event" : "Create Event"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default ItemModal;
