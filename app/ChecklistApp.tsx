import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const apartamentos = [];
for (let t = 1; t <= 12; t++) {
  for (let p = 0; p <= 3; p++) {
    for (let a = 1; a <= 4; a++) {
      apartamentos.push({
        torre: `T${t}`,
        ap: `${a}`,
        andar: p === 0 ? "Térreo" : `${p}º`,
        iniciado: false,
        finalizado: false,
        pendencias: false,
        liberado: false,
        responsavelExecucao: "",
        responsavelRevisao: "",
        responsavelCorrecao: "",
        dataInicio: "",
        dataTermino: "",
        previsaoEntrega: "",
        dataCorrecao: "",
        statusPendencia: "",
        descricaoPendencia: "",
        observacoes: ""
      });
    }
  }
}

export default function ChecklistApp() {
  const [lista, setLista] = useState(apartamentos);

  const toggleCheckbox = (index, field) => {
    const novaLista = [...lista];
    novaLista[index][field] = !novaLista[index][field];
    setLista(novaLista);
  };

  const atualizarCampo = (index, campo, valor) => {
    const novaLista = [...lista];
    novaLista[index][campo] = valor;
    setLista(novaLista);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {lista.map((item, index) => (
        <Card key={index}>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">
              {item.torre} - Apto {item.ap} ({item.andar})
            </h2>
            <div className="flex gap-2 items-center">
              <Checkbox checked={item.iniciado} onCheckedChange={() => toggleCheckbox(index, "iniciado")} />
              <label>Checklist Iniciado</label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox checked={item.finalizado} onCheckedChange={() => toggleCheckbox(index, "finalizado")} />
              <label>Checklist Finalizado</label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox checked={item.pendencias} onCheckedChange={() => toggleCheckbox(index, "pendencias")} />
              <label>Pendências?</label>
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox checked={item.liberado} onCheckedChange={() => toggleCheckbox(index, "liberado")} />
              <label>Liberado?</label>
            </div>
            <Input placeholder="Responsável Execução" value={item.responsavelExecucao} onChange={(e) => atualizarCampo(index, "responsavelExecucao", e.target.value)} />
            <Input placeholder="Responsável Revisão" value={item.responsavelRevisao} onChange={(e) => atualizarCampo(index, "responsavelRevisao", e.target.value)} />
            <Input placeholder="Responsável Correção" value={item.responsavelCorrecao} onChange={(e) => atualizarCampo(index, "responsavelCorrecao", e.target.value)} />
            <Input type="date" placeholder="Data de Início" value={item.dataInicio} onChange={(e) => atualizarCampo(index, "dataInicio", e.target.value)} />
            <Input type="date" placeholder="Data de Término" value={item.dataTermino} onChange={(e) => atualizarCampo(index, "dataTermino", e.target.value)} />
            <Input type="date" placeholder="Previsão de Entrega" value={item.previsaoEntrega} onChange={(e) => atualizarCampo(index, "previsaoEntrega", e.target.value)} />
            <Input type="date" placeholder="Data da Correção" value={item.dataCorrecao} onChange={(e) => atualizarCampo(index, "dataCorrecao", e.target.value)} />
            <Input placeholder="Status da Pendência (Aberta, Resolvida...)" value={item.statusPendencia} onChange={(e) => atualizarCampo(index, "statusPendencia", e.target.value)} />
            <Textarea placeholder="Descrição da Pendência" value={item.descricaoPendencia} onChange={(e) => atualizarCampo(index, "descricaoPendencia", e.target.value)} />
            <Textarea placeholder="Observações Gerais" value={item.observacoes} onChange={(e) => atualizarCampo(index, "observacoes", e.target.value)} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
