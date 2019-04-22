import { Empty } from 'antd'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Holder, HolderTitle } from '../../components/styled/Holder'
import { useStore } from '../../store/helpers'
import { ColabForm } from './ColabForm'
import { idx } from "../../shared/idx";

export const ColabPanel = withRouter(
  observer(({ match }) => {
    const colabId = match.params.id
    const {
      fetchColaborador,
      colaborador,
      isLoadingSingle,
      saveColaborador
    } = useStore('colabStore')

    const initialValues = {
      nome: idx(['nome'], colaborador, ''),
      idade: idx(['idade'], colaborador, ''),
      celular: idx(['celular'], colaborador, ''),
      funcao: idx(['funcao'], colaborador, ''),
      diaDisp: {
        domingo: idx(['diaDisp', 'domingo'], colaborador, []),
        segunda: idx(['diaDisp', 'segunda'], colaborador, []),
        terca: idx(['diaDisp', 'terca'], colaborador, []),
        quarta: idx(['diaDisp', 'quarta'], colaborador, []),
        quinta: idx(['diaDisp', 'quinta'], colaborador, []),
        sexta: idx(['diaDisp', 'sexta'], colaborador, []),
        sabado: idx(['diaDisp', 'sabado'], colaborador, [])
      }
    }

    async function onSave(values) {
      await saveColaborador(colabId, values)
    }

    useEffect(() => {
      if (colabId) fetchColaborador(colabId)
    }, [colabId])

    if (!colabId) {
      return (
        <Holder>
          <HolderTitle>Definições: </HolderTitle>
          <Empty
            description={'Selecione ou adicione um colaborador para editar.'}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </Holder>
      )
    }

    return (
      <Holder>
        <HolderTitle>Definições: </HolderTitle>
        <ColabForm
          initialValues={initialValues}
          isLoadingSingle={isLoadingSingle}
          onSave={onSave}
        />
      </Holder>
    )
  })
)
