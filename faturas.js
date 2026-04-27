// ─── DATA ───
const PLANS = {
  saude: {
    icon: 'ph-heartbeat',
    iconBg: 'var(--color-negative-surface)',
    iconColor: 'var(--color-negative-dark)',
    title: 'Unimed Saúde',
    sub: 'Apólice 0021 8334 002 · 4 faturas no ciclo 2026',
    insight: {
      tone: 'negative',
      icon: 'ph-fill ph-warning-circle',
      html: 'Você tem <strong>3 faturas vencidas</strong> que somam <strong>R$ 660,00</strong>. Pague as 3 juntas e ganhe <strong>10% de desconto</strong>.',
      cta: 'Pagar 3 juntas',
      ctaAction: 'openNegotiation',
      tag: '−10%'
    },
    invoices: [
      {ref:'Mensalidade · Janeiro', m:'Jan', y:'2026', due:'25/01/2026', dueNote:'Vencida há 87 dias', dueCls:'late', amount:'220,00', status:'overdue', pm:'pix', pmLabel:'Pix', paidOn:null},
      {ref:'Mensalidade · Fevereiro', m:'Fev', y:'2026', due:'25/02/2026', dueNote:'Vencida há 56 dias', dueCls:'late', amount:'220,00', status:'overdue', pm:'pix', pmLabel:'Pix', paidOn:null},
      {ref:'Mensalidade · Março', m:'Mar', y:'2026', due:'25/03/2026', dueNote:'Vencida há 28 dias', dueCls:'late', amount:'220,00', status:'overdue', pm:'pix', pmLabel:'Pix', paidOn:null},
      {ref:'Mensalidade · Abril', m:'Abr', y:'2026', due:'25/04/2026', dueNote:'Vence em 3 dias', dueCls:'upcoming', amount:'220,00', status:'open', pm:'credito', pmLabel:'Crédito •••• 8820', paidOn:null, scheduled:true},
      {ref:'Mensalidade · Dezembro', m:'Dez', y:'2025', due:'25/12/2025', dueNote:'Quitada', dueCls:'muted', amount:'220,00', status:'paid', pm:'credito', pmLabel:'Crédito •••• 8820', paidOn:'23/12/2025'},
      {ref:'Mensalidade · Novembro', m:'Nov', y:'2025', due:'25/11/2025', dueNote:'Quitada', dueCls:'muted', amount:'220,00', status:'paid', pm:'debito', pmLabel:'Débito automático', paidOn:'25/11/2025'}
    ]
  },
  odonto: {
    icon: 'ph-tooth',
    iconBg: 'var(--color-positive-surface)',
    iconColor: 'var(--color-positive-dark)',
    title: 'Unimed Odonto',
    sub: 'Apólice 0832 4422 016 · Débito automático',
    insight: {
      tone: 'positive',
      icon: 'ph-fill ph-check-circle',
      html: 'Todas as faturas em dia. A próxima <strong>R$ 89,90</strong> será debitada automaticamente em <strong>15/05/2026</strong>.',
      cta: null, tag: null
    },
    invoices: [
      {ref:'Mensalidade · Maio', m:'Mai', y:'2026', due:'15/05/2026', dueNote:'Vence em 28 dias', dueCls:'upcoming', amount:'89,90', status:'open', pm:'debito', pmLabel:'Débito automático', paidOn:null, scheduled:true},
      {ref:'Mensalidade · Abril', m:'Abr', y:'2026', due:'15/04/2026', dueNote:'Quitada', dueCls:'muted', amount:'89,90', status:'paid', pm:'debito', pmLabel:'Débito automático', paidOn:'15/04/2026'},
      {ref:'Mensalidade · Março', m:'Mar', y:'2026', due:'15/03/2026', dueNote:'Quitada', dueCls:'muted', amount:'89,90', status:'paid', pm:'debito', pmLabel:'Débito automático', paidOn:'15/03/2026'},
      {ref:'Mensalidade · Fevereiro', m:'Fev', y:'2026', due:'15/02/2026', dueNote:'Quitada', dueCls:'muted', amount:'89,90', status:'paid', pm:'debito', pmLabel:'Débito automático', paidOn:'15/02/2026'},
      {ref:'Mensalidade · Janeiro', m:'Jan', y:'2026', due:'15/01/2026', dueNote:'Quitada', dueCls:'muted', amount:'89,90', status:'paid', pm:'debito', pmLabel:'Débito automático', paidOn:'15/01/2026'}
    ]
  },
  previdencia: {
    icon: 'ph-piggy-bank',
    iconBg: 'var(--color-positive-surface)',
    iconColor: 'var(--color-positive-dark)',
    title: 'Unimed Previdência',
    sub: 'Apólice 7741 3302 088 · Débito automático',
    insight: {
      tone: 'positive',
      icon: 'ph-fill ph-check-circle',
      html: 'Todas as contribuições em dia. A próxima <strong>R$ 210,00</strong> será debitada automaticamente em <strong>10/05/2026</strong>.',
      cta: null, tag: null
    },
    invoices: [
      {ref:'Contribuição · Maio', m:'Mai', y:'2026', due:'10/05/2026', dueNote:'Vence em 18 dias', dueCls:'upcoming', amount:'210,00', status:'open', pm:'debito', pmLabel:'Débito automático', paidOn:null, scheduled:true, titular:'Lucas Salgado'},
      {ref:'Contribuição · Abril', m:'Abr', y:'2026', due:'10/04/2026', dueNote:'Quitada', dueCls:'muted', amount:'210,00', status:'paid', pm:'debito', pmLabel:'Débito automático', paidOn:'10/04/2026', titular:'Lucas Salgado'},
      {ref:'Contribuição · Maio', m:'Mai', y:'2026', due:'10/05/2026', dueNote:'Vence em 18 dias', dueCls:'upcoming', amount:'210,00', status:'open', pm:'debito', pmLabel:'Débito automático', paidOn:null, scheduled:true, titular:'Eduardo Salgado'},
      {ref:'Contribuição · Abril', m:'Abr', y:'2026', due:'10/04/2026', dueNote:'Quitada', dueCls:'muted', amount:'210,00', status:'paid', pm:'debito', pmLabel:'Débito automático', paidOn:'10/04/2026', titular:'Eduardo Salgado'}
    ]
  },
  residencial: {
    icon: 'ph-house-line',
    iconBg: 'var(--color-info-surface)',
    iconColor: 'var(--color-info-dark)',
    title: 'Unimed Patrimonial',
    sub: 'Apólice 5512 9981 200 · 12 parcelas anuais',
    insight: {
      tone: 'info',
      icon: 'ph ph-credit-card',
      html: '<strong>Cadastre seu cartão</strong> no débito automático e nunca mais se preocupe com vencimentos.',
      cta: 'Cadastrar cartão',
      ctaAction: 'openPayment',
      tag: null
    },
    invoices: [
      {ref:'Parcela 05/12', m:'Mai', y:'2026', due:'10/05/2026', dueNote:'Vence em 18 dias', dueCls:'upcoming', amount:'135,00', status:'open', pm:'boleto', pmLabel:'Boleto', paidOn:null, address:'Rua das Palmeiras, 1280, apto 72 · Pinheiros · São Paulo/SP · 05422-020'},
      {ref:'Parcela 04/12', m:'Abr', y:'2026', due:'10/04/2026', dueNote:'Quitada', dueCls:'muted', amount:'135,00', status:'paid', pm:'boleto', pmLabel:'Boleto', paidOn:'08/04/2026', address:'Rua das Palmeiras, 1280, apto 72 · Pinheiros · São Paulo/SP · 05422-020'},
      {ref:'Parcela 03/12', m:'Mar', y:'2026', due:'10/03/2026', dueNote:'Quitada', dueCls:'muted', amount:'135,00', status:'paid', pm:'boleto', pmLabel:'Boleto', paidOn:'09/03/2026', address:'Av. Paulista, 900, conj. 51 · Bela Vista · São Paulo/SP · 01310-100'},
      {ref:'Parcela 02/12', m:'Fev', y:'2026', due:'10/02/2026', dueNote:'Quitada', dueCls:'muted', amount:'135,00', status:'paid', pm:'boleto', pmLabel:'Boleto', paidOn:'10/02/2026', address:'Av. Paulista, 900, conj. 51 · Bela Vista · São Paulo/SP · 01310-100'},
      {ref:'Parcela 01/12', m:'Jan', y:'2026', due:'10/01/2026', dueNote:'Quitada', dueCls:'muted', amount:'135,00', status:'paid', pm:'boleto', pmLabel:'Boleto', paidOn:'09/01/2026', address:'Av. Paulista, 900, conj. 51 · Bela Vista · São Paulo/SP · 01310-100'}
    ]
  }
};

const STATUS_PILL = {
  overdue: '<span class="pill pill-negative"><i class="ph-fill ph-warning-circle" style="font-size:12px"></i> Vencida</span>',
  open:    '<span class="pill pill-info"><i class="ph ph-clock" style="font-size:12px"></i> Em aberto</span>',
  paid:    '<span class="pill pill-positive"><i class="ph-fill ph-check-circle" style="font-size:12px"></i> Paga</span>'
};
const PM_ICON = { pix:'ph-qr-code', credito:'ph-credit-card', debito:'ph-credit-card', boleto:'ph-barcode' };

const plans = document.querySelectorAll('.plan');
const panelIcon = document.getElementById('panel-icon');
const panelTitle = document.getElementById('panel-title');
const panelSub = document.getElementById('panel-sub');
const invoicesBody = document.getElementById('invoices-body');
const insightBar = document.getElementById('insight-bar');
const invoicePanel = document.getElementById('invoice-panel');
let currentPlanTitle = PLANS.saude.title;
let currentFilter = 'all';
let currentAddress = 'all';
let currentTitular = 'all';
let currentPlanKey = 'saude';

function syncCheckAll() {
  const checkAllEl = document.querySelector('.check-all');
  if (!checkAllEl) return;
  const rows = invoicesBody.querySelectorAll('.check');
  const allChecked = rows.length > 0 && [...rows].every(c => c.classList.contains('checked'));
  checkAllEl.classList.toggle('checked', allChecked);
}

insightBar.addEventListener('click', e => {
  const btn = e.target.closest('[data-cta-action]');
  if (!btn) return;
  if (btn.dataset.ctaAction === 'openPayment') {
    openDrawer('payment');
  } else if (btn.dataset.ctaAction === 'openNegotiation') {
    openNegotiationModal();
  }
});

function renderInsight(ins) {
  if (!ins) { insightBar.style.display = 'none'; return; }
  insightBar.style.display = 'flex';
  const toneColors = {
    negative: { bg:'var(--color-negative-surface)', fg:'var(--color-negative-dark)' },
    positive: { bg:'var(--color-positive-surface)', fg:'var(--color-positive-dark)' },
    info:     { bg:'var(--color-info-surface)',     fg:'var(--color-info-dark)' }
  }[ins.tone];
  insightBar.style.background = toneColors.bg;
  let actionsHTML = '';
  if (ins.cta) {
    actionsHTML = `<div class="actions">
      <button class="promo-btn" ${ins.ctaAction ? `data-cta-action="${ins.ctaAction}"` : ''}>${ins.cta}${ins.tag ? ` <span class="off-tag">${ins.tag}</span>` : ''}</button>
    </div>`;
  }
  insightBar.innerHTML = `
    <div class="left" style="color:${toneColors.fg}">
      <i class="${ins.icon}" style="font-size:20px"></i>
      <div class="text">${ins.html}</div>
    </div>
    ${actionsHTML}`;
}

// DD/MM/AAAA → DD/MM/AA
function fmtDateShort(d) { return d ? d.slice(0, 6) + d.slice(8) : '—'; }

function renderInvoices(list, showAddress, showTitular) {
  let filtered = currentFilter === 'all' ? list : list.filter(inv => inv.status === currentFilter);
  if (showAddress && currentAddress !== 'all') {
    filtered = filtered.filter(inv => inv.address === currentAddress);
  }
  if (showTitular && currentTitular !== 'all') {
    filtered = filtered.filter(inv => inv.titular === currentTitular);
  }
  document.getElementById('th-address').style.display = showAddress ? '' : 'none';
  document.getElementById('th-titular').style.display = showTitular ? '' : 'none';
  if (filtered.length === 0) {
    invoicesBody.innerHTML = `<tr><td colspan="9" style="text-align:center;padding:40px 0;color:var(--color-neutral-600);font-size:14px">Nenhuma fatura encontrada para este filtro.</td></tr>`;
    return;
  }
  invoicesBody.innerHTML = filtered.map(inv => {
    const dueNoteCls = inv.dueCls === 'late' ? 'late'
                      : inv.dueCls === 'upcoming' ? 'upcoming'
                      : '';
    const dueNoteStyle = inv.dueCls === 'muted' ? 'font-size:12px;color:var(--color-neutral-600)' : '';
    const pmIcon = PM_ICON[inv.pm] || 'ph-credit-card';
    let action;
    if (inv.status === 'overdue') {
      action = `<button class="btn btn-sm btn-primary" data-pay-invoice data-amount="${inv.amount}" data-due="${inv.due}" data-ref="${inv.m} ${inv.y}" data-reffull="${inv.ref}" data-status="overdue" data-duenote="${inv.dueNote}">Pagar</button>
                <button class="btn-icon-md" style="width:36px;height:36px;border-radius:8px" aria-label="Baixar boleto"><i class="ph ph-download-simple" style="font-size:16px"></i></button>`;
    } else if (inv.status === 'open') {
      action = inv.scheduled
        ? `<span class="scheduled"><i class="ph ph-calendar-check" style="font-size:16px"></i> Agend.</span>
           <button class="btn-icon-md" style="width:36px;height:36px;border-radius:8px" aria-label="Baixar boleto"><i class="ph ph-download-simple" style="font-size:16px"></i></button>`
        : `<button class="btn btn-sm btn-primary" data-pay-invoice data-amount="${inv.amount}" data-due="${inv.due}" data-ref="${inv.m} ${inv.y}" data-reffull="${inv.ref}" data-status="open" data-duenote="${inv.dueNote}">Pagar</button>
           <button class="btn-icon-md" style="width:36px;height:36px;border-radius:8px" aria-label="Baixar boleto"><i class="ph ph-download-simple" style="font-size:16px"></i></button>`;
    } else {
      action = `<button class="btn btn-sm btn-ghost"><i class="ph ph-receipt" style="font-size:14px"></i> Comp.</button>
                <button class="btn-icon-md" style="width:36px;height:36px;border-radius:8px" aria-label="Baixar boleto"><i class="ph ph-download-simple" style="font-size:16px"></i></button>`;
    }
    return `
      <tr class="${inv.status==='overdue' ? 'overdue' : ''}">
        <td><span class="check${inv.status==='overdue' ? ' checked':''}"></span></td>
        <td>
          <div class="ref-cell">
            <div class="ref-month"><span class="m">${inv.m}</span><span class="y">${inv.y}</span></div>
          </div>
        </td>
        ${showAddress ? `<td><span class="addr-wrap" data-tooltip="${inv.address || ''}"><span class="addr-text">${inv.address || '—'}</span></span></td>` : ''}
        ${showTitular ? `<td style="font-size:13px;white-space:nowrap">${inv.titular || '—'}</td>` : ''}
        <td>
          <div class="due-cell">
            <span class="date">${fmtDateShort(inv.due)}</span>
            <span class="${dueNoteCls}" style="${dueNoteStyle}">${inv.dueNote}</span>
          </div>
        </td>
        <td><span class="amount"><span class="cur">R$</span>${inv.amount}</span></td>
        <td>${STATUS_PILL[inv.status]}</td>
        <td><span class="pay-method clickable" data-open-drawer="payment"><i class="ph ${pmIcon}"></i> ${inv.pmLabel}</span></td>
        <td>${inv.paidOn ? fmtDateShort(inv.paidOn) : '<span style="color:var(--color-neutral-500)">—</span>'}</td>
        <td><div class="row-actions">${action}</div></td>
      </tr>`;
  }).join('');
  syncCheckAll();
}

function selectPlan(key) {
  const data = PLANS[key];
  if (!data) return;
  plans.forEach(x => {
    const on = x.dataset.plan === key;
    x.classList.toggle('active', on);
    x.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  panelIcon.style.background = data.iconBg;
  panelIcon.style.color = data.iconColor;
  panelIcon.innerHTML = `<i class="ph ${data.icon}" style="font-size:22px"></i>`;
  panelTitle.textContent = data.title;
  panelSub.textContent = data.sub;
  currentPlanTitle = data.title;
  currentPlanKey = key;
  currentFilter = 'all';
  currentAddress = 'all';
  currentTitular = 'all';
  const invoices = data.invoices;
  const titularSelect = document.getElementById('titular-select');
  if (key === 'previdencia') {
    const titulares = [...new Set(invoices.map(i => i.titular).filter(Boolean))];
    const titList = titularSelect.querySelector('.custom-select-list');
    titList.innerHTML = `<li role="option" class="selected" data-value="all">Todos os titulares</li>` +
      titulares.map(t => `<li role="option" data-value="${t}">${t}</li>`).join('');
    titularSelect.querySelector('.cst-label').textContent = 'Todos os titulares';
    titularSelect.style.display = '';
    rebindCustomSelect(titularSelect);
  } else {
    titularSelect.style.display = 'none';
  }
  const enderecoSelect = document.getElementById('endereco-select');
  if (key === 'residencial') {
    const addresses = [...new Set(invoices.map(i => i.address).filter(Boolean))];
    const truncAddr = a => a.length > 40 ? a.slice(0, 40) + '…' : a;
    const list = enderecoSelect.querySelector('.custom-select-list');
    list.innerHTML = `<li role="option" class="selected" data-value="all">Todos os endereços</li>` +
      addresses.map(a => `<li role="option" data-value="${a}" title="${a}">${truncAddr(a)}</li>`).join('');
    enderecoSelect.querySelector('.cst-label').textContent = 'Todos os endereços';
    enderecoSelect.style.display = '';
    rebindCustomSelect(enderecoSelect);
  } else {
    enderecoSelect.style.display = 'none';
  }
  const counts = {
    all:     invoices.length,
    overdue: invoices.filter(i => i.status === 'overdue').length,
    open:    invoices.filter(i => i.status === 'open').length,
    paid:    invoices.filter(i => i.status === 'paid').length
  };
  const labels = {
    all:     `Todas as faturas (${counts.all})`,
    overdue: `Vencidas (${counts.overdue})`,
    open:    `Em aberto (${counts.open})`,
    paid:    `Pagas (${counts.paid})`
  };
  const situacaoSelect = document.querySelector('[data-cselect="situacao"]');
  if (situacaoSelect) {
    situacaoSelect.querySelector('.cst-label').textContent = labels.all;
    situacaoSelect.querySelectorAll('.custom-select-list li').forEach(li => {
      li.textContent = labels[li.dataset.value];
      li.classList.toggle('selected', li.dataset.value === 'all');
    });
  }
  document.getElementById('panel-foot').style.display = key === 'saude' ? '' : 'none';
  renderInsight(data.insight);
  renderInvoices(data.invoices, key === 'residencial', key === 'previdencia');
}

plans.forEach(p => p.addEventListener('click', () => {
  selectPlan(p.dataset.plan);
  requestAnimationFrame(() => {
    const rect = invoicePanel.getBoundingClientRect();
    if (rect.top > 80) {
      window.scrollTo({ top: window.scrollY + rect.top - 24, behavior: 'smooth' });
    }
  });
}));
selectPlan('saude');

// Custom select dropdowns
function rebindCustomSelect(cs) {
  const trigger = cs.querySelector('.custom-select-trigger');
  const list    = cs.querySelector('.custom-select-list');
  const label   = cs.querySelector('.cst-label');

  const newTrigger = trigger.cloneNode(true);
  trigger.parentNode.replaceChild(newTrigger, trigger);
  newTrigger.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = list.classList.contains('open');
    document.querySelectorAll('.custom-select-list.open').forEach(l => {
      l.classList.remove('open');
      l.previousElementSibling.classList.remove('open');
      l.previousElementSibling.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      list.classList.add('open');
      newTrigger.classList.add('open');
      newTrigger.setAttribute('aria-expanded', 'true');
    }
  });

  list.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      list.querySelectorAll('li').forEach(x => x.classList.remove('selected'));
      li.classList.add('selected');
      label.textContent = li.textContent;
      list.classList.remove('open');
      newTrigger.classList.remove('open');
      newTrigger.setAttribute('aria-expanded', 'false');

      const planData = PLANS[currentPlanKey];
      const isResidencial = currentPlanKey === 'residencial';
      const isPrevidencia = currentPlanKey === 'previdencia';
      if (cs.dataset.cselect === 'situacao') {
        currentFilter = li.dataset.value;
        renderInvoices(planData.invoices, isResidencial, isPrevidencia);
      } else if (cs.dataset.cselect === 'endereco') {
        currentAddress = li.dataset.value;
        renderInvoices(planData.invoices, isResidencial, isPrevidencia);
      } else if (cs.dataset.cselect === 'titular') {
        currentTitular = li.dataset.value;
        renderInvoices(planData.invoices, isResidencial, isPrevidencia);
      }
    });
  });
}

document.querySelectorAll('.custom-select').forEach(cs => rebindCustomSelect(cs));

// ─────────── TOGGLE DE VISÃO ───────────
const viewToggleBtn  = document.getElementById('view-toggle');
const viewToggleIcon = document.getElementById('view-toggle-icon');
const plansContainer = document.querySelector('.plans');

viewToggleBtn.addEventListener('click', () => {
  const isMini = plansContainer.classList.toggle('plans--mini');
  viewToggleBtn.classList.toggle('active', isMini);
  viewToggleIcon.className = isMini ? 'ph ph-list' : 'ph ph-squares-four';
  viewToggleBtn.setAttribute('aria-pressed', isMini ? 'true' : 'false');
});

document.querySelectorAll('[data-plan-demo]').forEach(btn => {
  btn.addEventListener('click', e => e.preventDefault());
});

// Drag-to-scroll com momentum no carrossel de cards
(function () {
  const el = plansContainer;
  let dragging = false, startX = 0, scrollLeft = 0, moved = false;
  let velX = 0, lastX = 0, lastT = 0, rafId = null;

  function momentum() {
    velX *= 0.92;
    if (Math.abs(velX) < 0.5) return;
    el.scrollLeft -= velX;
    rafId = requestAnimationFrame(momentum);
  }

  el.addEventListener('mousedown', e => {
    if (el.classList.contains('plans--mini')) return;
    cancelAnimationFrame(rafId);
    dragging = true; moved = false; velX = 0;
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
    lastX = e.pageX; lastT = performance.now();
    el.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    const dx = e.pageX - el.offsetLeft - startX;
    if (Math.abs(dx) > 4) moved = true;
    el.scrollLeft = scrollLeft - dx;
    const now = performance.now();
    const dt = now - lastT || 1;
    velX = (e.pageX - lastX) / dt * 16;
    lastX = e.pageX; lastT = now;
  });

  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    el.style.userSelect = '';
    if (Math.abs(velX) > 1) rafId = requestAnimationFrame(momentum);
  });

  el.addEventListener('click', e => {
    if (moved) e.stopPropagation();
  }, true);
})();

// Clube de Benefícios modal
const clubeOverlay = document.getElementById('clube-modal-overlay');
function openClubeModal() {
  clubeOverlay.classList.add('open');
  clubeOverlay.setAttribute('aria-hidden', 'false');
}
function closeClubeModal() {
  clubeOverlay.classList.remove('open');
  clubeOverlay.setAttribute('aria-hidden', 'true');
}
document.getElementById('clube-modal-close').addEventListener('click', closeClubeModal);
clubeOverlay.addEventListener('click', e => { if (e.target === clubeOverlay) closeClubeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && clubeOverlay.classList.contains('open')) closeClubeModal(); });

// Notificações dropdown
const notifBtn      = document.getElementById('notif-btn');
const notifDropdown = document.getElementById('notif-dropdown');
const notifBadge    = document.getElementById('notif-badge');

notifBtn.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = notifDropdown.classList.toggle('open');
  notifBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  notifDropdown.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  if (isOpen) {
    notifBadge.style.display = 'none';
    notifDropdown.querySelectorAll('.notif-item.unread').forEach(item => {
      item.dataset.pendingRead = 'true';
    });
  }
});

document.getElementById('notif-clube').addEventListener('click', e => {
  e.stopPropagation();
  notifDropdown.classList.remove('open');
  notifBtn.setAttribute('aria-expanded', 'false');
  openClubeModal();
});

notifDropdown.querySelector('.notif-mark-all').addEventListener('click', e => {
  e.stopPropagation();
  notifDropdown.querySelectorAll('.notif-item').forEach(item => item.classList.remove('unread'));
  notifDropdown.querySelectorAll('.notif-dot').forEach(dot => dot.remove());
});

// User dropdown
const userChip     = document.getElementById('user-chip');
const userDropdown = document.getElementById('user-dropdown');
userChip.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = userDropdown.classList.toggle('open');
  userChip.classList.toggle('open', isOpen);
  userChip.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  userDropdown.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
});
userDropdown.querySelectorAll('.user-dropdown-opt').forEach(opt => {
  opt.addEventListener('click', e => {
    e.stopPropagation();
    userDropdown.querySelectorAll('.user-dropdown-opt').forEach(x => x.classList.remove('selected'));
    opt.classList.add('selected');
    userDropdown.classList.remove('open');
    userChip.classList.remove('open');
    userChip.setAttribute('aria-expanded', 'false');
    userDropdown.setAttribute('aria-hidden', 'true');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.custom-select-list.open').forEach(l => {
    l.classList.remove('open');
    l.previousElementSibling.classList.remove('open');
    l.previousElementSibling.setAttribute('aria-expanded', 'false');
  });
  userDropdown.classList.remove('open');
  userChip.classList.remove('open');
  userChip.setAttribute('aria-expanded', 'false');
  userDropdown.setAttribute('aria-hidden', 'true');
  notifDropdown.classList.remove('open');
  notifBtn.setAttribute('aria-expanded', 'false');
  notifDropdown.setAttribute('aria-hidden', 'true');
});

// Card brand detection
function detectBrand(value) {
  const n = value.replace(/\D/g, '');
  if (/^4/.test(n))                          return 'visa';
  if (/^(51|52|53|54|55|2[2-7])/.test(n))   return 'master';
  if (/^3[47]/.test(n))                      return 'amex';
  if (/^(4011|4312|4389|4514|4576|5041|5066|5090|6277|6362|6363|650|6516|6550)/.test(n)) return 'elo';
  return null;
}

document.querySelectorAll('[data-card-input]').forEach(input => {
  const box = input.closest('.card-box') || input.closest('.card-form');
  const icons = box ? box.querySelectorAll('.brand-icon') : [];
  input.addEventListener('input', () => {
    const brand = detectBrand(input.value);
    icons.forEach(img => {
      if (!brand) {
        img.classList.remove('dim');
      } else {
        img.classList.toggle('dim', img.dataset.brand !== brand);
      }
    });
  });
});

// Checkbox
const checkAllEl = document.querySelector('.check-all');

checkAllEl.addEventListener('click', e => {
  e.stopPropagation();
  const willCheck = !checkAllEl.classList.contains('checked');
  checkAllEl.classList.toggle('checked', willCheck);
  invoicesBody.querySelectorAll('.check').forEach(c => c.classList.toggle('checked', willCheck));
});

invoicesBody.addEventListener('click', e => {
  const check = e.target.closest('.check');
  if (check) {
    e.stopPropagation();
    check.classList.toggle('checked');
    syncCheckAll();
    return;
  }
  const payLink = e.target.closest('[data-open-drawer="payment"]');
  if (payLink) {
    e.stopPropagation();
    openDrawer('payment');
    return;
  }
  const payBtn = e.target.closest('[data-pay-invoice]');
  if (payBtn) {
    e.stopPropagation();
    openCheckout({
      amount: payBtn.dataset.amount,
      due: payBtn.dataset.due,
      ref: payBtn.dataset.ref,
      refFull: payBtn.dataset.reffull,
      status: payBtn.dataset.status,
      dueNote: payBtn.dataset.duenote
    });
  }
});

// ─────────── DRAWER ───────────
const drawer = document.getElementById('drawer');
const scrim = document.getElementById('scrim');
const cardForm = document.getElementById('card-form');

function openDrawer(tab) {
  drawer.classList.add('open');
  scrim.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  if (tab) setDrawerTab(tab);
}
function closeDrawer() {
  drawer.classList.remove('open');
  scrim.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
}
function setDrawerTab(name) {
  document.querySelectorAll('.drawer-tabs button').forEach(b => {
    b.classList.toggle('on', b.dataset.tab === name);
  });
  document.querySelectorAll('.tab-pane').forEach(p => {
    p.classList.toggle('on', p.dataset.pane === name);
  });
}

document.querySelectorAll('[data-open-drawer="info"]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    openDrawer('info');
  });
});

document.querySelectorAll('.drawer-tabs button').forEach(b => {
  b.addEventListener('click', () => { setDrawerTab(b.dataset.tab); checkDirty(); });
});

document.getElementById('drawer-close').addEventListener('click', closeDrawer);

// Payment method selection
const drawerFoot = document.getElementById('drawer-foot');
const drawerSave = document.getElementById('drawer-save');
const autopay = document.getElementById('autopay-toggle');
let initialPm = 'credito';
let initialAutopay = true;
let initialCardFields = {};

function readCardFields() {
  const inputs = document.querySelectorAll('#card-form input');
  const vals = {};
  inputs.forEach((inp, i) => { vals[i] = inp.value; });
  return vals;
}
function currentPm() {
  const sel = document.querySelector('.pay-opt.selected');
  return sel ? sel.dataset.pm : null;
}
function checkDirty() {
  const pm = currentPm();
  const autopayOn = autopay.classList.contains('on');
  const cardVals = readCardFields();
  let dirty = pm !== initialPm || autopayOn !== initialAutopay;
  if (!dirty) {
    for (const k in cardVals) {
      if (cardVals[k] !== (initialCardFields[k] || '')) { dirty = true; break; }
    }
  }
  const onPaymentTab = document.querySelector('.drawer-tabs button.on').dataset.tab === 'payment';
  drawerFoot.style.display = (dirty && onPaymentTab) ? 'flex' : 'none';
}

const savedCardsEl = document.getElementById('saved-cards');
const addNewCardBtn = document.getElementById('add-new-card');

savedCardsEl.querySelectorAll('.saved-card').forEach(sc => {
  sc.addEventListener('click', e => {
    if (e.target.closest('.sc-action')) return;
    savedCardsEl.querySelectorAll('.saved-card').forEach(x => x.classList.remove('selected'));
    sc.classList.add('selected');
    cardForm.classList.remove('on');
    checkDirty();
  });
});

savedCardsEl.querySelectorAll('[data-sc-del]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const card = btn.closest('.saved-card');
    card.remove();
  });
});
savedCardsEl.querySelectorAll('[data-sc-edit]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const card = btn.closest('.saved-card');
    savedCardsEl.querySelectorAll('.saved-card').forEach(x => x.classList.remove('selected'));
    card.classList.add('selected');
    cardForm.classList.add('on');
    checkDirty();
  });
});

addNewCardBtn.addEventListener('click', () => {
  savedCardsEl.querySelectorAll('.saved-card').forEach(x => x.classList.remove('selected'));
  cardForm.classList.add('on');
  checkDirty();
});

drawer.querySelectorAll('.pay-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    drawer.querySelectorAll('.pay-opt').forEach(x => x.classList.remove('selected'));
    opt.classList.add('selected');
    const pm = opt.dataset.pm;
    if (pm === 'credito') {
      cardForm.classList.remove('on');
      const first = savedCardsEl.querySelector('.saved-card');
      if (first) { savedCardsEl.querySelectorAll('.saved-card').forEach(x => x.classList.remove('selected')); first.classList.add('selected'); }
    } else if (pm === 'debito') {
      cardForm.classList.add('on');
    } else {
      cardForm.classList.remove('on');
    }
    checkDirty();
  });
});

document.querySelectorAll('#card-form input').forEach(inp => {
  inp.addEventListener('input', checkDirty);
});

autopay.addEventListener('click', () => {
  autopay.classList.toggle('on');
  autopay.setAttribute('aria-pressed', autopay.classList.contains('on'));
  checkDirty();
});

drawerSave.addEventListener('click', () => {
  initialPm = currentPm();
  initialAutopay = autopay.classList.contains('on');
  initialCardFields = readCardFields();
  checkDirty();
});


// ─────────── CHECKOUT DRAWER ───────────
const checkoutDrawer = document.getElementById('checkout-drawer');
const coCollapse = document.getElementById('co-collapse');
const coCollapseToggle = document.getElementById('co-collapse-toggle');
const coPayMethods = document.getElementById('co-pay-methods');
const coPayBtn = document.getElementById('co-pay');

function openCheckout(data) {
  const amountStr = `R$ ${data.amount}`;
  document.getElementById('co-amount').textContent = amountStr;
  document.getElementById('co-ref').textContent = `${data.ref}`;
  document.getElementById('co-ref-full').textContent = data.refFull;
  document.getElementById('co-due-date').textContent = data.due;
  document.getElementById('co-total').textContent = amountStr;
  document.getElementById('co-plan').textContent = currentPlanTitle.split(' · ')[0];

  const feesEl = document.getElementById('co-fees');
  feesEl.textContent = data.status === 'overdue' ? 'Incluído no valor' : '—';

  coCollapseToggle.classList.toggle('overdue', data.status === 'overdue');
  coCollapseToggle.classList.toggle('open', data.status !== 'overdue');
  const collapseIcon = coCollapseToggle.querySelector('.collapse-icon');
  collapseIcon.className = data.status === 'overdue'
    ? 'ph-fill ph-warning-circle collapse-icon'
    : 'ph ph-clock collapse-icon';
  collapseIcon.style.fontSize = '18px';

  coPayBtn.innerHTML = `<i class="ph ph-lock-key" style="font-size:16px"></i> Pagar ${amountStr}`;

  coPayMethods.querySelectorAll('[data-co-pm]').forEach(x => x.classList.remove('selected'));
  const creditoOpt = coPayMethods.querySelector('[data-co-pm="credito"]');
  if (creditoOpt) creditoOpt.classList.add('selected');
  document.getElementById('co-pix-section').classList.remove('on');
  document.getElementById('co-boleto-section').classList.remove('on');
  document.getElementById('co-installments-wrap').classList.add('on');
  const coSavedCards = document.getElementById('co-saved-cards');
  coSavedCards.querySelectorAll('.saved-card').forEach((x, i) => x.classList.toggle('selected', i === 0));

  const amountVal = parseFloat(data.amount.replace(',', '.'));
  const installmentOpts = [
    { n: 1,  label: `1x ${fmtBRL(amountVal)} · à vista · sem juros` },
    { n: 2,  label: `2x ${fmtBRL(amountVal / 2)} · sem juros` },
    { n: 3,  label: `3x ${fmtBRL(amountVal / 3)} · sem juros` },
    { n: 6,  label: `6x ${fmtBRL(amountVal * 1.0276 / 6)} · total ${fmtBRL(amountVal * 1.0276)}` }
  ];
  const coInsList = document.getElementById('co-ins-list');
  coInsList.innerHTML = installmentOpts.map((o, i) =>
    `<li ${i === 0 ? 'class="selected"' : ''} data-ins="${o.n}">${o.label}</li>`
  ).join('');
  document.getElementById('co-ins-label').textContent = installmentOpts[0].label;

  checkoutDrawer.classList.add('open');
  scrim.classList.add('open');
  checkoutDrawer.setAttribute('aria-hidden', 'false');
}
function closeCheckout() {
  checkoutDrawer.classList.remove('open');
  scrim.classList.remove('open');
  checkoutDrawer.setAttribute('aria-hidden', 'true');
  goToMain();
}

coCollapseToggle.addEventListener('click', () => coCollapse.classList.toggle('on'));

const coSavedCardsEl = document.getElementById('co-saved-cards');
const coAddNewCardBtn = document.getElementById('co-add-new-card');
const coPixSection = document.getElementById('co-pix-section');
const coBoletoSection = document.getElementById('co-boleto-section');
const coInsWrap = document.getElementById('co-installments-wrap');

function coShowPm(pm) {
  coPixSection.classList.toggle('on', pm === 'pix');
  coBoletoSection.classList.toggle('on', pm === 'boleto');
  coInsWrap.classList.toggle('on', pm === 'credito');
  if (pm === 'credito') {
    const first = coSavedCardsEl.querySelector('.saved-card');
    if (first) { coSavedCardsEl.querySelectorAll('.saved-card').forEach(x => x.classList.remove('selected')); first.classList.add('selected'); }
  }
}

coPayMethods.querySelectorAll('[data-co-pm]').forEach(opt => {
  opt.addEventListener('click', () => {
    coPayMethods.querySelectorAll('[data-co-pm]').forEach(x => x.classList.remove('selected'));
    opt.classList.add('selected');
    coShowPm(opt.dataset.coPm);
  });
});

// New card page navigation
const coMain        = document.getElementById('co-main');
const coNewCardPage = document.getElementById('co-new-card-page');
const coSaveNewCard = document.getElementById('co-save-new-card');

function goToNewCard() {
  coMain.style.display = 'none';
  coNewCardPage.style.display = '';
  coPayBtn.style.display = 'none';
  coSaveNewCard.style.display = '';
}
function goToMain() {
  coMain.style.display = '';
  coNewCardPage.style.display = 'none';
  coPayBtn.style.display = '';
  coSaveNewCard.style.display = 'none';
}

document.getElementById('co-back-btn').addEventListener('click', goToMain);
document.getElementById('co-close-btn').addEventListener('click', closeCheckout);
document.getElementById('co-close-btn-2').addEventListener('click', closeCheckout);

coSavedCardsEl.querySelectorAll('.saved-card').forEach(sc => {
  sc.addEventListener('click', e => {
    if (e.target.closest('.sc-action')) return;
    coSavedCardsEl.querySelectorAll('.saved-card').forEach(x => x.classList.remove('selected'));
    sc.classList.add('selected');
    sc.after(coInsWrap);
  });
});

coSavedCardsEl.querySelectorAll('[data-sc-del]').forEach(btn => {
  btn.addEventListener('click', e => { e.stopPropagation(); btn.closest('.saved-card').remove(); });
});

coSavedCardsEl.querySelectorAll('[data-sc-edit]').forEach(btn => {
  btn.addEventListener('click', e => { e.stopPropagation(); goToNewCard(); });
});

coAddNewCardBtn.addEventListener('click', goToNewCard);

// Auto-pay toggle (checkout main page)
const coAutopayTrack = document.getElementById('co-autopay-track');
const coAutopayInput = document.getElementById('co-autopay');
coAutopayTrack.addEventListener('click', () => {
  coAutopayTrack.classList.toggle('on');
  coAutopayInput.checked = coAutopayTrack.classList.contains('on');
});

// Installments dropdown
const coInsTrigger = document.getElementById('co-ins-trigger');
const coInsList    = document.getElementById('co-ins-list');
coInsTrigger.addEventListener('click', e => {
  e.stopPropagation();
  coInsTrigger.classList.toggle('open');
  coInsList.classList.toggle('open');
});
coInsList.addEventListener('click', e => {
  const opt = e.target.closest('[data-ins]');
  if (!opt) return;
  coInsList.querySelectorAll('li').forEach(o => o.classList.remove('selected'));
  opt.classList.add('selected');
  document.getElementById('co-ins-label').textContent = opt.textContent;
  coInsTrigger.classList.remove('open');
  coInsList.classList.remove('open');
});
document.addEventListener('click', e => {
  if (!e.target.closest('#co-installments')) {
    coInsTrigger.classList.remove('open');
    coInsList.classList.remove('open');
  }
});

function setupCopyBtn(btnId, codeId) {
  document.getElementById(btnId).addEventListener('click', () => {
    const code = document.getElementById(codeId).textContent;
    navigator.clipboard.writeText(code).catch(() => {});
    const btn = document.getElementById(btnId);
    btn.classList.add('copied');
    btn.innerHTML = '<i class="ph-fill ph-check" style="font-size:16px"></i>';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '<i class="ph ph-copy" style="font-size:16px"></i>';
    }, 2000);
  });
}

setupCopyBtn('co-pix-copy-btn',    'co-pix-code');
setupCopyBtn('co-boleto-copy-btn', 'co-boleto-code');

// Pay-with segmented (inside card-form)
document.querySelectorAll('.pay-with-seg').forEach(seg => {
  seg.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      seg.querySelectorAll('button').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
    });
  });
});

// Modern scrollbar auto-hide
const _scrollTimers = new Map();
function _handleScroll(el) {
  el.classList.add('is-scrolling');
  clearTimeout(_scrollTimers.get(el));
  _scrollTimers.set(el, setTimeout(() => el.classList.remove('is-scrolling'), 1000));
}
window.addEventListener('scroll', () => _handleScroll(document.documentElement), { passive: true });
document.querySelectorAll('.drawer-body').forEach(el => {
  el.addEventListener('scroll', () => _handleScroll(el), { passive: true });
});

// Auto-pay toggle (new card page)
const coAutopayToggle = document.getElementById('co-autopay-toggle');
if (coAutopayToggle) coAutopayToggle.addEventListener('click', () => {
  const isOn = coAutopayToggle.classList.toggle('on');
  coAutopayToggle.setAttribute('aria-pressed', isOn);
});


// ─────────── NEGOTIATION MODAL ───────────
const negModalOverlay = document.getElementById('neg-modal-overlay');
const negFlipInner    = document.getElementById('neg-flip-inner');

const NEG_DISCOUNTS = {
  credito: { 1: 0.10, 2: 0.10, 3: 0.10, 4: 0.10, 6: 0.10, 12: 0.10 },
  pix:     { 1: 0.10 }
};

function getNegOriginal() {
  return PLANS[currentPlanKey].invoices
    .filter(i => i.status === 'overdue')
    .reduce((s, i) => s + parseFloat(i.amount.replace(',', '.')), 0);
}
let negCurrentPm = 'credito';
let negCurrentIns = 1;

function fmtBRL(n) {
  return 'R$ ' + n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function negUpdateSummary() {
  const original = getNegOriginal();
  const discount = (NEG_DISCOUNTS[negCurrentPm] || {})[negCurrentIns] || 0;
  const discountAmt = original * discount;
  const total = original - discountAmt;
  const pct = Math.round(discount * 100);

  document.getElementById('neg-discount-label').textContent = pct + '% de desconto';
  document.getElementById('neg-discount-value').textContent = '− ' + fmtBRL(discountAmt);
  document.getElementById('neg-total').textContent = fmtBRL(total);

  const discountRow = document.getElementById('neg-discount-label').closest('.neg-summary-row');
  discountRow.style.display = discount > 0 ? '' : 'none';
}

function negSelectPm(pm) {
  negCurrentPm = pm;
  document.querySelectorAll('.neg-method').forEach(m => {
    m.classList.toggle('selected', m.id === 'neg-method-' + pm);
  });
  negCurrentIns = 1;
  const firstOpt = document.querySelector('#neg-ins-list li');
  if (firstOpt) {
    document.querySelectorAll('#neg-ins-list li').forEach(o => o.classList.remove('selected'));
    firstOpt.classList.add('selected');
    document.getElementById('neg-ins-label').textContent = firstOpt.textContent;
  }
  negUpdateSummary();
}

function openNegotiationModal() {
  document.getElementById('neg-original-value').textContent = fmtBRL(getNegOriginal());
  negSelectPm('credito');
  negFlipInner.classList.remove('flipped');
  negModalOverlay.classList.add('open');
  negModalOverlay.setAttribute('aria-hidden', 'false');
}
function closeNegotiationModal() {
  negModalOverlay.classList.remove('open');
  negModalOverlay.setAttribute('aria-hidden', 'true');
}

function flipToInvoices() {
  renderNegInvoices();
  negFlipInner.classList.add('flipped');
  document.getElementById('neg-modal-front').inert = true;
  document.getElementById('neg-modal-back').inert = false;
}
function flipToNegotiation() {
  negFlipInner.classList.remove('flipped');
  document.getElementById('neg-modal-front').inert = false;
  document.getElementById('neg-modal-back').inert = true;
}

function renderNegInvoices() {
  const plan = PLANS[currentPlanKey];
  const planTitle = plan.title.split(' · ')[0];
  const apolice = plan.sub.split(' · ')[0].replace('Apólice ', '');
  const overdue = plan.invoices.filter(i => i.status === 'overdue');
  const total = overdue.reduce((s, i) => s + parseFloat(i.amount.replace(',', '.')), 0);
  const list = document.getElementById('neg-inv-list');
  list.innerHTML = overdue.map((inv, idx) => `
    <div class="neg-inv-item" id="neg-inv-${idx}">
      <button class="neg-inv-head" data-neg-inv="${idx}" type="button">
        <div class="neg-inv-left">
          <span class="neg-inv-ref">${inv.ref}</span>
          <span class="neg-inv-due">${inv.dueNote}</span>
        </div>
        <div class="neg-inv-right">
          <span class="neg-inv-amount">R$ ${inv.amount}</span>
          <i class="ph ph-caret-down neg-inv-caret" style="font-size:14px"></i>
        </div>
      </button>
      <div class="neg-inv-body"><div>
        <div class="neg-inv-details">
          <div class="kv"><span class="k">Vencimento</span><span class="v">${inv.due}</span></div>
          <div class="kv"><span class="k">Plano</span><span class="v">${planTitle}</span></div>
          <div class="kv"><span class="k">Apólice</span><span class="v">${apolice}</span></div>
          <div class="kv"><span class="k">Titular</span><span class="v">Lucas Salgado</span></div>
          <div class="kv"><span class="k">Valor</span><span class="v">R$ ${inv.amount}</span></div>
        </div>
      </div></div>
    </div>`).join('') +
    `<div class="neg-inv-total">
      <span class="k">Valor total</span>
      <span class="v">R$ ${total.toFixed(2).replace('.', ',')}</span>
    </div>`;

  list.querySelectorAll('.neg-inv-head').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.neg-inv-item');
      item.classList.toggle('on');
    });
  });
}

document.querySelectorAll('.neg-method-head[data-neg-pm]').forEach(btn => {
  btn.addEventListener('click', () => negSelectPm(btn.dataset.negPm));
});

// Installment dropdown (negotiation)
const negInsTrigger = document.getElementById('neg-ins-trigger');
const negInsList   = document.getElementById('neg-ins-list');
negInsTrigger.addEventListener('click', e => {
  e.stopPropagation();
  negInsTrigger.classList.toggle('open');
  negInsList.classList.toggle('open');
});
negInsList.addEventListener('click', e => {
  const opt = e.target.closest('[data-neg-ins]');
  if (!opt) return;
  negInsList.querySelectorAll('li').forEach(o => o.classList.remove('selected'));
  opt.classList.add('selected');
  document.getElementById('neg-ins-label').textContent = opt.textContent;
  negCurrentIns = parseInt(opt.dataset.negIns);
  negInsTrigger.classList.remove('open');
  negInsList.classList.remove('open');
  negUpdateSummary();
});
document.addEventListener('click', e => {
  if (!e.target.closest('#neg-ins-select')) {
    negInsTrigger.classList.remove('open');
    negInsList.classList.remove('open');
  }
});

document.getElementById('neg-modal-close').addEventListener('click', closeNegotiationModal);
negModalOverlay.addEventListener('click', e => {
  if (e.target === negModalOverlay) closeNegotiationModal();
});

document.getElementById('neg-modal-see-invoices').addEventListener('click', flipToInvoices);
document.getElementById('neg-back-btn').addEventListener('click', flipToNegotiation);
document.getElementById('neg-back-close').addEventListener('click', closeNegotiationModal);
document.getElementById('neg-back-download').addEventListener('click', () => {});
document.getElementById('neg-modal-confirm').addEventListener('click', () => {
  closeNegotiationModal();
});

// ─── SCRIM + ESC: handlers únicos para todos os overlays ───
scrim.addEventListener('click', () => {
  if (drawer.classList.contains('open')) closeDrawer();
  else if (checkoutDrawer.classList.contains('open')) closeCheckout();
});

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (negModalOverlay.classList.contains('open')) closeNegotiationModal();
  else if (checkoutDrawer.classList.contains('open')) closeCheckout();
  else if (drawer.classList.contains('open')) closeDrawer();
});
