import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { Form } from './styles';
import { Input, TextArea } from '~/components/Form';
import ButtonCustom from '~/components/ButtonCustom';

import { useAuth } from '~/hooks/AuthContext';
import api from '~/services/api';

function ShowcaseForm({ setActiveStep, setGalleryId }) {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const { user } = useAuth();

  async function handleDataSubmit(data) {
    console.log('SUBMIT GAL', { ...data, user_id: user.id });

    try {
      const gallery = await api.post('/galleries', {
        ...data,
        user_id: user.id,
      });

      console.log('GALERIA CRIADA ID:', gallery.data.id);
      setActiveStep(2);
      setGalleryId(gallery.data.id);
    } catch (err) {
      if (err) alert('ERRO AO CRIAR GALERIA');
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(handleDataSubmit)}>
        <Input
          name="title"
          ref={register({
            required: 'Campo Obrigatório',
          })}
          errorText={errors.title && errors.title.message}
          autoComplete="off"
          label="Título"
        />

        <TextArea
          name="description"
          ref={register({
            required: 'Campo Obrigatório',
          })}
          errorText={errors.description && errors.description.message}
          autoComplete="off"
          label="Descrição"
        />

        <div className="button__wrapper">
          <ButtonCustom
            model="outline"
            onClick={() => history.push('/showcase')}
          >
            Cancelar
          </ButtonCustom>

          <ButtonCustom type="submit">Salvar</ButtonCustom>
        </div>
      </Form>
    </div>
  );
}

ShowcaseForm.propTypes = {
  setActiveStep: PropTypes.func.isRequired,
  setGalleryId: PropTypes.func.isRequired,
};

export default ShowcaseForm;
