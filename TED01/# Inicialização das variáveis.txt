# Inicialização das variáveis
alturas = []
alturas_masculino = []
contador_feminino = 0

# Coleta de dados
for i in range(1, 16):
    print(f"\nPessoa {i}:")
    while True:
        try:
            altura = float(input("Digite a altura (em metros): "))
            if altura <= 0:
                raise ValueError
            break
        except ValueError:
            print("Altura inválida. Digite um número positivo.")

    while True:
        genero = input("Digite o gênero (M para Masculino, F para Feminino): ").strip().upper()
        if genero in ['M', 'F']:
            break
        else:
            print("Gênero inválido. Digite M ou F.")

    alturas.append(altura)
    if genero == 'M':
        alturas_masculino.append(altura)
    else:
        contador_feminino += 1

# Processamento dos dados
maior_altura = max(alturas)
menor_altura = min(alturas)
media_masculino = sum(alturas_masculino) / len(alturas_masculino) if alturas_masculino else 0

# Exibição dos resultados
print("\n--- Resultados ---")
print(f"Maior altura do grupo: {maior_altura:.2f} m")
print(f"Menor altura do grupo: {menor_altura:.2f} m")
print(f"Média de altura dos homens: {media_masculino:.2f} m")
print(f"Número de mulheres: {contador_feminino}")
