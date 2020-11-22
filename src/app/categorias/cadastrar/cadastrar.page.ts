import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage {

  public nome;

  constructor(
    private categoriaService: CategoriaService,
    public toastController: ToastController,
    private router: Router) { }


    public salvar() {
      if (this.nome && this.nome != '') {

        const categoria = { nome: this.nome };

        this.categoriaService.salvar(categoria).subscribe(() => {
          this.presentToast('Categoria cadastrada com sucesso!');
          this.router.navigateByUrl('/categorias/listar');
        });
    
      }
    }

    async presentToast(mensagem: string) {
      const toast = await this.toastController.create({
        message: mensagem,
        duration: 2000
      });
      toast.present();
    }
}
